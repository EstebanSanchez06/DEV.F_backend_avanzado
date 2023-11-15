const Joi = require("joi")

const schema = Joi.object().keys({
    userName:Joi.string().min(3).max(30).required().messages({
        "string.base": "The username must be a string",
        "string.empty":"The username must not be empty",
        "string.min":"Minimun characters are 3" ,
        "string.max": "The username has a max of 30 characters"
    }),
    email:Joi.string().email().required(),
    password: Joi.string().required(),
    phoneNumber: Joi.number().required(),
    active: Joi.boolean()
})

module.exports = schema