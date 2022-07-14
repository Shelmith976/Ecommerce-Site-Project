const router = require('express').Router();
const {createProduct,updateProduct,viewProducts,getProduct} = require('../controllers/productController')

router.post('/createProduct', createProduct)
router.put('/updateProduct', updateProduct)
router.get('/Product/:product_name', getProduct)
router.get('/viewProducts', viewProducts)

module.exports= {router};
