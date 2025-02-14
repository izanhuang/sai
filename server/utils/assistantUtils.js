import azureClient from "../utils/azureClient.js";
import config from "../config/config.js";

export async function createThread(initialMessage) {
  const threadResponse = await azureClient.beta.threads.create();
  await azureClient.beta.threads.messages.create(threadResponse.id, {
    role: "assistant",
    content: initialMessage,
  });
  return threadResponse;
}

export async function sendMessage(userMessage, threadId) {
  const response = await azureClient.beta.threads.messages.create(threadId, {
    role: "user",
    content: userMessage,
  });
  console.log(`Message created:  ${JSON.stringify(response)}`);

  return response;
}

export async function createAssistantResponse(threadId) {
  const runResponse = await azureClient.beta.threads.runs.createAndPoll(
    threadId,
    {
      assistant_id: config.azure.assistantId,
    },
    { pollIntervalMs: 500 }
  );
  console.log(`Run created:  ${JSON.stringify(runResponse)}`);

  return runResponse;
}

export async function getMessages(threadId, params = {}) {
  const messagesResponse = await azureClient.beta.threads.messages.list(
    threadId,
    params
  );

  return messagesResponse;
}
