const {request, response} = require('express')
const User = require('../models/usersModel')

const createUser = async(req = request, res= response)=>{
    try{
        const{body} = req
        const user = new User(body)
        await user.save()
        res.status(201).json({
            msg: "User has been created"
        })
    }
    catch(error){
        res.status(500).json({
            msg:"Something happened when creating user", error
        })
    }
}

const readUser = async(req = request, res=response) =>{
    try{
        const {limit = 10} = req.query
        const queryParam = {active:true}
        const recordLength = await User.countDocuments()
        const user = await User.find(queryParam).limt(Number(limit))
        res.status(200).json({
            recordLength,
            user
        })
    }
    catch(error){
        res.status(500).json({
            msg:"Something happened when reading users", error
        })
    }
}

const updateUser = async(req = request, res = response) =>{
    try{
        const {params,  body} = req
        const [userId] = params
        const user = await User.findByIdAndUpdate(userId, body)
        const userToShow = await User.findById(userId)
        res.status(202).json({
            msg:"User has been updated", userToShow
        })
    
    }catch(error){
        res.status(500).json({
            msg: "Something happened when updating user", error
        })
    }
}

const deleteUser = async(req = request, res =response)=>{
    try{
        const {userId} = request.params
        const deleteState = {"active":false}
        const user = await User.findByIdAndUpdate(userId, deleteState)
        const userToShow = await User.findById(userId)
        res.json({
            msg:"User has been erased", userToShow
        })
    }catch(error){
        res.status(500).json({
            msg:"Something occurred when deleting user", error
        })
    }
}

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser
}