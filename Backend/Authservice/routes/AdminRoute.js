const express = require('express');
const router = express.Router();
const { admin } = require('../controllers/AdminauthController');
router.post('/login/admin', admin);
module.exports = { router };
