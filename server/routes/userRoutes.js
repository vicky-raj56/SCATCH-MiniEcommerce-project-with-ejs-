import express from "express";
import {  loginController, userController } from "../controllers/user-controller.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";

const router = express.Router();

router.post("/register", userController);
router.post("/login", loginController);



router.get("/post", isLoggedIn,(req,res)=>{
    // console.log(req.user)
    res.send("hellow")
});

export default router;
