import axios from 'axios'

const initiateAssistant = async (callback, errorHandler) => {
  await axios
    .post('/api/assistant/initiate')
    .then((response) => {
      callback({
        threadId: response.data.threadId,
        messages: response.data.messages,
      })
    })
    .catch((error) => {
      console.error(error)
      errorHandler()
    })
}

const sendMessageToAssistant = async (
  threadId,
  input,
  callback,
  errorHandler
) => {
  await axios
    .post('/api/assistant/sendMessage', {
      message: input,
      threadId,
    })
    .then((response) => {
      callback({ messages: response.data.messages })
    })
    .catch((error) => {
      console.error(error)
      errorHandler()
    })
}

const getAssistantResponse = async (threadId, callback, errorHandler) => {
  await axios
    .post('/api/assistant/getReply', {
      threadId,
    })
    .then((response) => {
      callback({ messages: response.data.messages })
    })
    .catch((error) => {
      console.error(error)
      errorHandler()
    })
}

export { initiateAssistant, sendMessageToAssistant, getAssistantResponse }
