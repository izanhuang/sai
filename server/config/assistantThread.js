import assistantsClient from "./assistantsClient";

const assistantThread = await assistantsClient.beta.threads.create({});

console.log(`Thread created: ${JSON.stringify(assistantThread)}`);

export default assistantThread;
