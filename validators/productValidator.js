const Joi = require('joi')

const schema = Joi.object().keys({
    productName: Joi.string().required(),
    description: Joi.string(),
    price:Joi.number().required(),
    brand: Joi.string().required(),
    active:Joi.boolean(),
    availability:Joi.boolean().required(),
    quantityAvailable:Joi.number().required()
})

module.exports= schema