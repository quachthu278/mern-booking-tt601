import express from "express";
import { login, register, socialAuth } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/google", socialAuth)
router.post("/facebook", socialAuth)

export default router