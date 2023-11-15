const {Schema, model} = require('mongoose')

const ProductSchema = Schema({
    productName:{
        type:String,
        required: [true, "Name of the product is required"],
    },
    description:{
        type:String,
        default: ""
    }
    ,
    price:{
        type:Number,
        required:[true, "Price of the product is required"]
    },
    brand:{
        type:String,
        required:[true, "Brand of the product is required"]
    },
    active:{
        type:Boolean,
        default:true
    },
    availability:{
        type:Boolean,
        default:true,
        required:[true, "Availability of the product is required"]
    },
    quantityAvailable:{
        type:Number,
        required:[true, "Quantity of the product is required"]
    }
})

module.exports= model('Product', ProductSchema)