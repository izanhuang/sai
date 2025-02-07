import express from "express";
import assistantController from "../controllers/assistantController.js";

const router = express.Router();

router.post("/initiate", assistantController.initiateAssistant);

router.post("/chat", assistantController.chatWithAssistant);

export default router;
