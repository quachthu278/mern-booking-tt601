import express from "express";
import { getStats } from "../controllers/stats.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//GET STATS
router.get("/", verifyAdmin, getStats);

export default router;
