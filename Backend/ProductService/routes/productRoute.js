const router = require('express').Router();
const poolPromise = require('../config/poolPromise');
const {createProduct,updateProduct,viewProducts,getProduct, pageProduct} = require('../controllers/productController')

router.post('/createProduct', createProduct)
router.put('/updateProduct', updateProduct)
router.get('/product/:productName', getProduct)
router.get('/viewProducts', viewProducts )
router.get('/pageProduct', pageProduct )


module.exports= {router};
