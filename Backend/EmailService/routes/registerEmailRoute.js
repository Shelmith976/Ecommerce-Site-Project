const express = require( 'express' );
const {sendEmail} = require('../controllers/registerEmailController')

const router = express.Router();

router.post('/', sendEmail );

module.exports = {router}
