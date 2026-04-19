import express from "express";
import {
  createPaymentIntent,
  updatePaymentStatus,
  getPayments,
} from "../controllers/payment.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE INTENT
router.post("/create-intent", verifyToken, createPaymentIntent);

//UPDATE STATUS (Webhook Simulation / Admin)
router.put("/:id", verifyToken, updatePaymentStatus);

//GET ALL (Admin)
router.get("/", verifyAdmin, getPayments);

export default router;
