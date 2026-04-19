import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "../controllers/category.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createCategory);

//UPDATE
router.put("/:id", verifyAdmin, updateCategory);

//DELETE
router.delete("/:id", verifyAdmin, deleteCategory);

//GET
router.get("/:id", getCategory);

//GET ALL
router.get("/", getCategories);

export default router;
