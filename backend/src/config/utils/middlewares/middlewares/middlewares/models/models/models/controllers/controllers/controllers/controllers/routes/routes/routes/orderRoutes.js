const router = require("express").Router();
const controller = require("../controllers/orderController");
const { authenticate, authorize } = require("../middlewares/authMiddleware");

router.post("/", authenticate, authorize("buyer"), controller.createOrder);

module.exports = router;