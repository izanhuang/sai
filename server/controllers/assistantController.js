import assistantService from "../services/assistantService.js";

async function initiateAssistant(req, res) {
  try {
    const assistantResponse = await assistantService.startAssistantSession();
    res.status(200).json(assistantResponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function chatWithAssistant(req, res) {
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

export default {
  initiateAssistant,
  chatWithAssistant,
};
