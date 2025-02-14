import axios from 'axios'

const initiateAssistant = async (callback, errorHandler) => {
  try {
    const response = await axios.post('/api/assistant/initiate')
    callback({
      threadId: response.data.threadId,
      messages: response.data.messages,
    })
  } catch (error) {
    console.error(error)
    errorHandler()
  }
}

const sendMessageToAssistant = async (
  threadId,
  input,
  callback,
  errorHandler
) => {
  try {
    const response = await axios.post('/api/assistant/sendMessage', {
      message: input,
      threadId,
    })
    callback({ messages: response.data.messages })
  } catch (error) {
    console.error(error)
    errorHandler()
  }
}

const getAssistantReply = async (threadId, callback, errorHandler) => {
  try {
    const response = await axios.post('/api/assistant/getReply', {
      threadId,
    })
    callback({ messages: response.data.messages })
  } catch (error) {
    console.error(error)
    errorHandler()
  }
}

export { initiateAssistant, sendMessageToAssistant, getAssistantReply }
