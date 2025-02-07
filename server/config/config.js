import dotenv from "dotenv";

dotenv.config();

export default {
  azure: {
    apiKey: process.env.AZURE_OPENAI_KEY,
    endpoint: process.env.AZURE_OPENAI_ENDPOINT,
    deploymentName: process.env.AZURE_OPENAI_DEPLOYMENT_NAME,
    assistantId: process.env.AZURE_OPENAI_ASSISTANT_ID,
    apiVersion: process.env.OPENAI_API_VERSION,
  },
  port: process.env.PORT || 8080,
};
