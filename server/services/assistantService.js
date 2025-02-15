import {
  createThread,
  sendMessage,
  createAssistantResponse,
  getMessages,
} from "../utils/assistantUtils.js";

async function startAssistantSession() {
  try {
    const threadResponse = await createThread(
      "Hello! How can I assist you today?"
    );
    const messagesResponse = await getMessages(threadResponse.id);

    const firstMessage = messagesResponse.data.find(
      (message) => message.role === "assistant"
    );
    const formattedFirstMessage = {
      id: firstMessage.id,
      role: "assistant",
      text: firstMessage.content[0].text.value,
    };
    console.log(`Assistant session started: ${threadResponse.id}`);

    return {
      threadId: threadResponse.id,
      messages: [formattedFirstMessage],
    };
  } catch (error) {
    throw new Error("Error starting assistant session: " + error.message);
  }
}

async function sendMessageToAssistant(userMessage, threadId) {
  try {
    await sendMessage(userMessage, threadId);
    const params = {
      order: "asc",
    };
    const runMessages = await getMessages(threadId, params);
    const formattedMessages = runMessages.data.map((message) => ({
      id: message.id,
      role: message.role,
      text: message.content[0].text.value,
    }));
    console.log(`Message sent: ${JSON.stringify(userMessage)}`);

    return { threadId, messages: formattedMessages };
  } catch (error) {
    throw new Error("Error sending message: " + error.message);
  }
}

async function getAssistantResponse(threadId) {
  try {
    await createAssistantResponse(threadId);
    const params = {
      order: "asc",
    };
    const runMessages = await getMessages(threadId, params);
    const formattedMessages = runMessages.data.map((message) => ({
      id: message.id,
      role: message.role,
      text: message.content[0].text.value,
    }));
    console.log(`Message content: ${JSON.stringify(formattedMessages)}`);

    return { threadId, messages: formattedMessages };
  } catch (error) {
    throw new Error("Error creating reply: " + error.message);
  }
}

export default {
  startAssistantSession,
  sendMessageToAssistant,
  getAssistantResponse,
};
