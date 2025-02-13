import Messages from '../messages/Messages'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './ChatBox.css'

const ChatBox = () => {
  // Prevent double useEffect call
  const hasRun = useRef(false)

  const [threadId, setThreadId] = useState('')
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  function handleInputChange(event) {
    setInput(event.target.value)
  }

  async function handleEnter() {
    axios
      .post('/api/assistant/chat', {
        message: input,
        threadId,
      })
      .then((response) => {
        console.log(response)
        setMessages(response.data.messages)
        setInput('')
      })
      .catch((error) => console.error(error))
  }

  async function initiate() {
    const response = await axios.post('/api/assistant/initiate')
    setThreadId(response.data.threadId)
    setMessages(response.data.messages)
  }

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true
    initiate()
  }, [])

  return (
    <div className="chat-box glass-card">
      {messages && messages.length > 0 && <Messages messages={messages} />}
      <div className="chat-box__input-container">
        <textarea
          className="chat-box__input"
          placeholder="Send a message..."
          type="text"
          value={input}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="chat-box__submit"
          onClick={handleEnter}
        >
          <span className="chat-box__submit-icon">🏹</span>
        </button>
      </div>
    </div>
  )
}

export default ChatBox
