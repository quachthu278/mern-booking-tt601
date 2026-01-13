import express from "express";
import {
  createDelivery,
  deleteDelivery,
  getDelivery,
  getDeliveries,
  updateDelivery,
} from "../controllers/delivery.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createDelivery);

//UPDATE
router.put("/:id", verifyAdmin, updateDelivery);

//DELETE
router.delete("/:id", verifyAdmin, deleteDelivery);

//GET
router.get("/:id", verifyAdmin, getDelivery);

//GET ALL
router.get("/", verifyAdmin, getDeliveries);

export default router;
