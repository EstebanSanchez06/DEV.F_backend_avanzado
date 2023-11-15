const {celebrate, Segments} = require("celebrate")
const {schema} = require("../validators/userValidator")

const celebrateUsersValidator = celebrate({[Segments.BODY]: schema})

module.exports = {celebrateUsersValidator}