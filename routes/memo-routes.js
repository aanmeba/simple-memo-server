import express from "express";
import { createMemo, getMemos } from "../controllers/memo-controller.js";

const router = express.Router();

router.get("/", getMemos);
router.post("/", createMemo);

export default router;
