import express from "express";
import {
  createMemo,
  deleteMemo,
  editMemo,
  getMemos,
} from "../controllers/memo-controller.js";

const router = express.Router();

router.get("/", getMemos);
router.post("/", createMemo);
router.delete("/:id", deleteMemo);
router.put("/:id", editMemo);

export default router;
