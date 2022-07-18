const router = require('express').Router();
const {createProduct,updateProduct,viewProducts,getProduct} = require('../controllers/productController')

router.post('/createProduct', createProduct)
router.put('/updateProduct', updateProduct)
router.get('/product/:productName', getProduct)
router.get('/viewProducts', viewProducts)

module.exports= {router};
