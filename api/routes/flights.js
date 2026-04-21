import express from "express";
import {
  createFlight,
  deleteFlight,
  getFlight,
  getFlights,
  updateFlight,
} from "../controllers/flight.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createFlight);

//UPDATE
router.put("/:id", verifyAdmin, updateFlight);

//DELETE
router.delete("/:id", verifyAdmin, deleteFlight);

//GET
router.get("/find/:id", getFlight);

//GET ALL
router.get("/", getFlights);

export default router;
