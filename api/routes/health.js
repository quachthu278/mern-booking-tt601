import express from "express";
import { getSystemHealth } from "../controllers/health.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//GET HEALTH
router.get("/", verifyAdmin, getSystemHealth);

export default router;
