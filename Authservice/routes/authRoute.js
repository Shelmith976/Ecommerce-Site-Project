// const express = require("express");
// const Router = express.Router();
// const authRouter = require("express").Router();
// const { Register, Login } = require("../controllers/authController");
// authRouter.post("/register", Register);
// authRouter.post("/login", Login);

// module.exports = Router;

const express = require("express");
const router = express.Router();

const { Register, login } = require("../controllers/authController");

router.post("/register", Register);
router.post("/login", login);

module.exports = { router };
