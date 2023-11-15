const express = require('express')
const cors = require('cors')
const Database = require('./db/config')
require('dotenv').config()

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 3001
        this.database = new Database
        this.usersPath = '/api/users'
        this.productsPath ='api/products'
        this.middlewares()
        this.dbConnection()
        this.router()
    }
    async dbConnection(){
        await this.database.dbConnection()
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:false}))
        this.app.static('public')
    }
    router(){
        this.app.use(this.usersPath, require('./routes/users.routes'))
        this.app.use(this.productsPath, require('./routes/products.routes'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Esta aplicacion corre en el puerto ${this.port}`)
        })
    }
}

module.exports = Server