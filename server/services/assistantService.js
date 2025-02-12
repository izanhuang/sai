import azureClient from "../utils/azureClient.js";
import config from "../config/config.js";

// let lastMessageId = null;

async function startAssistantSession() {
  try {
    const threadResponse = await azureClient.beta.threads.create();
    const initialMessage = await azureClient.beta.threads.messages.create(
      threadResponse.id,
      {
        role: "assistant",
        content: "Hello! How can I assist you today?",
      }
    );
    const messagesResponse = await azureClient.beta.threads.messages.list(
      threadResponse.id
    );
    const firstMessage = messagesResponse.data.find(
      (message) => message.role === "assistant"
    );
    // console.log(messagesResponse.data);
    const formattedFirstMessage = {
      id: firstMessage.id,
      role: "assistant",
      content: firstMessage.content,
    };

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
    const threadResponse = await azureClient.beta.threads.messages.create(
      threadId,
      {
        role: "user",
        content: userMessage,
      }
    );
    console.log(`Message created:  ${JSON.stringify(threadResponse)}`);

    const runResponse = await azureClient.beta.threads.runs.createAndPoll(
      threadId,
      {
        assistant_id: config.azure.assistantId,
      },
      { pollIntervalMs: 500 }
    );
    console.log(`Run created:  ${JSON.stringify(runResponse)}`);

    // console.log("lastMessageId", lastMessageId);
    // Get the messages with pagination
    const params = {
      order: "asc",
      // limit: 5,
    };
    // if (lastMessageId) {
    //   params.after = lastMessageId;
    // }
    const runMessages = await azureClient.beta.threads.messages.list(
      threadId,
      params
    );

    const messages = runMessages.data;
    // if (messages.length > 0) {
    //   lastMessageId = messages[0].id;
    // }

    // Format the messages for frontend
    const formattedMessages = runMessages.data.map((message) => ({
      id: message.id,
      role: message.role,
      content: message.content,
    }));
    console.log(`Message content: ${JSON.stringify(formattedMessages)}`);

    return { threadId, messages: formattedMessages };
  } catch (error) {
    throw new Error("Error sending message: " + error.message);
  }
}

export default {
  startAssistantSession,
  sendMessageToAssistant,
};
