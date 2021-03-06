const poolPromise = require('../config/poolPromise');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const admin = async (req, res) => {
  try {
    const user = await poolPromise.findOne({ email:req.user.email });
    if (user.role ===1)
      return res.status(200).json({ message: ' Admin resources' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = admin;
