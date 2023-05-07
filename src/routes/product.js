const express = require("express");
const {
  addProduct,
  getProductById,
  getProductDetailsBySlug,
  deleteProductById,
  enableProductById,
  getProducts,
  updateProduct,
  searchByProductName,
  getProductByCategory,
  addProductReview,
  deleteProductByCateId,
  enableProductByCateId,
  getProductsDisable,
  getNewestProduct,
  updateDiscountPercentByCategory,
} = require("../controllers/product");
const {
  requireSignin,
  adminMiddleware,
  userMiddleware,
  uploadCloud,
} = require("../common-middleware");
const router = express.Router();

router.post(
  "/add",
  requireSignin,
  adminMiddleware,
  uploadCloud.array("productPictures"),
  addProduct
);
router.get("/getProducts", getProducts);
router.get("/getNewestProducts", getNewestProduct);
router.post("/getProductDisable", getProductsDisable);
router.post(
  "/addProductReview",
  requireSignin,
  userMiddleware,
  addProductReview
);
router.get("/getById", getProductById);
router.post(
  "/update/:slug",
  requireSignin,
  adminMiddleware,
  uploadCloud.array("productPictures"),
  updateProduct
);
router.post("/searchByProductName", searchByProductName);
router.get("/getProductsByCategory/:categoryId", getProductByCategory);
router.post(
  "/deleteByCategory",
  requireSignin,
  adminMiddleware,
  deleteProductByCateId
);
router.post(
  "/enableByCategory",
  requireSignin,
  adminMiddleware,
  enableProductByCateId
);

router.post(
  "/deleteProductById",
  requireSignin,
  adminMiddleware,
  deleteProductById
);

router.post(
  "/enableProductById",
  requireSignin,
  adminMiddleware,
  enableProductById
);
router.post(
  "/updateDiscountPercent",
  requireSignin,
  adminMiddleware,
  updateDiscountPercentByCategory
);
router.get("/:slug", getProductDetailsBySlug);

module.exports = router;
