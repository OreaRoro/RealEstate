import express from "express";
import { signin, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/", signup);
router.get("/signin", signin);

export default router;