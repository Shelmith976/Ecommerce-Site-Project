const router1 = require('express').Router();
const {createOrder} = require('../controllers/orderController')

router1.post('/createOrder', createOrder)


module.exports= {router1};
