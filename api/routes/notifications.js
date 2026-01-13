import express from "express";
import {
  createNotification,
  getNotifications,
  markAsRead,
} from "../controllers/notification.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createNotification);

//GET ALL
router.get("/", verifyAdmin, getNotifications);

//MARK AS READ
router.put("/:id/read", verifyAdmin, markAsRead);

export default router;
