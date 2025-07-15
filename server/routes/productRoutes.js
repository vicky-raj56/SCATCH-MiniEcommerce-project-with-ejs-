import express from "express";
import { getProductData, productController } from "../controllers/product-controller.js";
import upload from "../middlewares/multer.js";


const router = express.Router();

router.get("/", (req, res) => {
  res.render("createproducts");
});
router.post("/create", upload.single("image"),productController);

router.get("/shop",getProductData);

export default router;
