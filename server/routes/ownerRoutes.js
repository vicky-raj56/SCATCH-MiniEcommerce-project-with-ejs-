import express from "express";
import { getadminCreateProduct, ownerController } from "../controllers/owner-controller.js";

const router = express.Router();

router.post("/create",ownerController);
router.get("/admin",getadminCreateProduct);
router.get("/",(req,res)=>{
    res.render("owner-login")
});

export default router;
