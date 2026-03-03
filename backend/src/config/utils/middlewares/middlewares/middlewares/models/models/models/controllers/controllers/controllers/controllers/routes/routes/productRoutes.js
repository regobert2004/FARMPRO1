const router = require("express").Router();
const controller = require("../controllers/productController");
const { authenticate, authorize } = require("../middlewares/authMiddleware");

router.get("/", controller.getProducts);
router.post("/", authenticate, authorize("farmer"), controller.createProduct);

module.exports = router;