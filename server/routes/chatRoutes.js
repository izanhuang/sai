import express from "express";
import { getAIResponse } from "../controllers/chatController";

const router = express.Router();

router.post("/chat", getAIResponse);

export default router;
