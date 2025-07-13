import express from "express";
import { ownerController } from "../controllers/owner-controller.js";

const router = express.Router();

router.get("/",ownerController);

export default router;
