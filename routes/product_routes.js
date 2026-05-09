const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
} = require("../controllers/product_controller");
const { uploadProductImage } = require("../controllers/uploads_controller");

router.route("/").post(createProduct).get(getAllProducts);
router.route("/uploads").post(uploadProductImage);

module.exports = router;
