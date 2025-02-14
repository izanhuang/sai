import express from "express";
import assistantController from "../controllers/assistantController.js";

const router = express.Router();

router.post("/initiate", assistantController.initiateAssistant);

router.post("/sendMessage", assistantController.sendMessageToAssistant);

router.post("/getReply", assistantController.getAssistantResponse);

export default router;
