const router = require("express").Router();
const controller = require("../controllers/adminController");
const { authenticate, authorize } = require("../middlewares/authMiddleware");

router.use(authenticate, authorize("admin"));

router.get("/farmers", controller.getUnverifiedFarmers);
router.put("/farmers/:id/verify", controller.verifyFarmer);

router.get("/orders", controller.getOrders);
router.put("/orders/:id/status", controller.updateOrderStatus);

module.exports = router;