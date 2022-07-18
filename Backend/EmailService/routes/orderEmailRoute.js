const express = require( 'express' );
const {sendEmail} = require('../controllers/orderEmailController')

const router1 = express.Router();

router1.post('/', sendEmail );

module.exports = {router1}
