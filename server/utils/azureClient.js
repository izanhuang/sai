import { AzureOpenAI } from "openai";
import config from "../config/config.js";

const { apiKey, endpoint, deploymentName, apiVersion } = config.azure;

if (!apiKey || !endpoint || !deploymentName || !apiVersion) {
  throw new Error(
    "Please set AZURE_OPENAI_KEY and AZURE_OPENAI_ENDPOINT and AZURE_OPENAI_DEPLOYMENT_NAME in your environment variables."
  );
}

// Get Azure SDK client
const client = new AzureOpenAI({
  endpoint,
  apiVersion,
  apiKey,
});

export default client;
