const {Router} = require("express")
const {
    createUser,
    readUser,
    updateUser,
    deleteUser
} = require('../controllers/usersController')
const {celebrateUsersValidator} = require('../middlewares/celebrateUsersValidator')
const router = Router()

router.post("/",celebrateUsersValidator,createUser )
router.get("/", readUser)
router.put("/:userId", updateUser)
router.delete("/:userId", deleteUser)

module.exports = router