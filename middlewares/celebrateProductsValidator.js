const {celebrate, Segments} = require('celebrate')
const {schema} = require('../validators/productValidator')

const celebrateProductsValidator = celebrate({[Segments.BODY]: schema})

module.exports= {celebrateProductsValidator}