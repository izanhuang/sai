import assistantService from "../services/assistantService.js";

async function initiateAssistant(req, res) {
  try {
    const assistantResponse = await assistantService.startAssistantSession();
    res.status(200).json(assistantResponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function sendMessageToAssistant(req, res) {
  try {
    const { message, threadId } = req.body;
    const assistantResponse = await assistantService.sendMessageToAssistant(
      message,
      threadId
    );
    res.status(200).json(assistantResponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAssistantResponse(req, res) {
  try {
    const { threadId } = req.body;
    const assistantResponse = await assistantService.getAssistantResponse(
      threadId
    );
    res.status(200).json(assistantResponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default {
  initiateAssistant,
  sendMessageToAssistant,
  getAssistantResponse,
};
