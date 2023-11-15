const {request, response} = require('express')
const Product = require('../models/productsModel')

const createProduct = async(req = request, res= response)=>{
    try{
        const{body} = req
        const product = new Product(body)
        await product.save()
        res.status(201).json({
            msg: "Product has been created"
        })
    }
    catch(error){
        res.status(500).json({
            msg:"Something happened when creating product", error
        })
    }
}

const readProduct = async(req = request, res=response) =>{
    try{
        const {limit = 10} = req.query
        const queryParam = {active:true}
        const recordLength = await Product.countDocuments()
        const product = await Product.find(queryParam).limt(Number(limit))
        res.status(200).json({
            recordLength,
            product
        })
    }
    catch(error){
        res.status(500).json({
            msg:"Something happened when reading users", error
        })
    }
}

const updateProduct = async(req = request, res = response) =>{
    try{
        const {params,  body} = req
        const [productId] = params
        const product = await Product.findByIdAndUpdate(productId, body)
        const productToShow = await Product.findById(productId)
        res.status(202).json({
            msg:"Product has been updated", productToShow
        })
    
    }catch(error){
        res.status(500).json({
            msg: "Something happened when updating product", error
        })
    }
}

const deleteProduct = async(req = request, res =response)=>{
    try{
        const {productId} = request.params
        const deleteState = {"active":false}
        const product = await Product.findByIdAndUpdate(productId, deleteState)
        const productToShow = await Product.findById(productId)
        res.json({
            msg:"Product has been erased", productToShow
        })
    }catch(error){
        res.status(500).json({
            msg:"Something occurred when deleting product", error
        })
    }
}

module.exports = {
    createProduct,
    readProduct,
    updateProduct,
    deleteProduct
}