const {Router} = require("express")
const {
    createProduct,
    readProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productsController")
const {celebrateProductsValidator} = require('../middlewares/celebrateProductsValidator')
const router = Router()

router.post("/", celebrateProductsValidator, createProduct)
router.get("/", readProduct)
router.put("/:productId", updateProduct)
router.delete("/:productId", deleteProduct)

module.exports = router