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
    const response = await axios.post('/api/assistant/chat', {
      message: input,
      threadId,
    })
    console.log(response)
    setMessages(response.data.messages)
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
    <div className="chat-box">
      <input value={input} onChange={handleInputChange} />
      <button type="submit" onClick={handleEnter}>
        Enter
      </button>
      {messages && messages.length > 0 && <Messages messages={messages} />}
    </div>
  )
}

export default ChatBox
