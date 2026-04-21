import express from "express";
import {
  createTaxi,
  deleteTaxi,
  getTaxi,
  getTaxis,
  updateTaxi,
} from "../controllers/taxi.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createTaxi);

//UPDATE
router.put("/:id", verifyAdmin, updateTaxi);

//DELETE
router.delete("/:id", verifyAdmin, deleteTaxi);

//GET
router.get("/find/:id", getTaxi);

//GET ALL
router.get("/", getTaxis);

export default router;
