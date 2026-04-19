import express from "express";
import {
  createArticle,
  deleteArticle,
  getArticle,
  getArticles,
  updateArticle,
} from "../controllers/article.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createArticle);

//UPDATE
router.put("/:id", verifyAdmin, updateArticle);

//DELETE
router.delete("/:id", verifyAdmin, deleteArticle);

//GET
router.get("/:id", getArticle);

//GET ALL
router.get("/", getArticles);

export default router;
