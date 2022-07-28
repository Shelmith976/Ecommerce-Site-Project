const express = require("express");
const router1 = express.Router();

const { getOrders, createOrder } = require("../controllers/orderController");

router1.get("/orders", getOrders);
router1.post("/addorder", createOrder);

module.exports = router1;
