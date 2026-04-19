import express from "express";
import {
  createBooking,
  deleteBooking,
  getBooking,
  getBookings,
  updateBookingStatus,
} from "../controllers/booking.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE (User/Admin can book)
router.post("/", verifyToken, createBooking);

//UPDATE STATUS (Admin only)
router.put("/:id/status", verifyAdmin, updateBookingStatus);

//DELETE
router.delete("/:id", verifyAdmin, deleteBooking);

//GET
router.get("/:id", verifyToken, getBooking);

//GET ALL (Admin)
router.get("/", verifyAdmin, getBookings);

export default router;
