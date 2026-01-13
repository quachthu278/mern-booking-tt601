import express from "express";
import { getSettings, updateSettings } from "../controllers/setting.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//GET
router.get("/", verifyAdmin, getSettings);

//UPDATE
router.put("/", verifyAdmin, updateSettings);

export default router;
