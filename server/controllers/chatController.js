import assistantThread from "../config/assistantThread";

const deploymentId = process.env.AZURE_DEPLOYMENT_ID;

export const getAIResponse = async (req, res) => {
  try {
    const { message } = req.body;
    const messages = [{ role: "user", content: message }];

    const response = assistantThread.create(deploymentId, messages);
    const aiResponse = response.choices[0].message.content;

    res.json({ response: aiResponse });
  } catch (error) {
    res.status(500).json({ error: "Error fetching AI response" });
  }
};
