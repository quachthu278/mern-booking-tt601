import express from "express";
import { createLog, getLogs } from "../controllers/log.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createLog);

//GET ALL
router.get("/", verifyAdmin, getLogs);

export default router;
