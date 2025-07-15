import express from "express";
import { productController } from "../controllers/product-controller.js";
import upload from "../middlewares/multer.js";
import productModel from "../models/product-model.js";


const router = express.Router();

router.get("/", (req, res) => {
  res.render("createproducts");
});
router.post("/create", upload.single("image"),productController);

router.get("/shop",async (req,res)=>{
    const products = await productModel.find({})
    console.log(products)
    res.render("shop",{products})
});

export default router;
