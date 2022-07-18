const express = require("express");
const router = express.Router();

const {
  Register,
  login,
  updateProfile,
} = require("../controllers/authController");

router.post("/register", Register);
router.post("/login", login);
router.post("/updateProfile", updateProfile);

module.exports = { router };
