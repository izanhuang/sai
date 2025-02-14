import Messages from '../messages/Messages'
import { useState, useEffect, useRef } from 'react'
import './ChatBox.css'
import {
  initiateAssistant,
  sendMessageToAssistant,
  getAssistantReply,
} from '../../services/assistantService'

const stingSound = new Audio(
  'https://cdn.freesound.org/previews/578/578801_10522382-lq.mp3'
)
stingSound.volume = 0.25

const ChatBox = () => {
  // Prevent double useEffect call
  const hasRun = useRef(false)

  const [threadId, setThreadId] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  function handleError() {
    setHasError(true)
  }

  async function initiate() {
    setIsLoading(true)
    const callback = ({ threadId: initialThreadId, messages }) => {
      setHasError(false)
      setThreadId(initialThreadId)
      setMessages(messages)
    }
    await initiateAssistant(callback, handleError)
    setIsLoading(false)
  }

  function handleInputChange(event) {
    setInputValue(event.target.value)
  }

  async function handleEnter() {
    if (inputValue.trim() === '') {
      return
    }
    setIsLoading(true)
    setHasError(false)
    const sendCallback = ({ messages }) => {
      setInputValue('')
      stingSound.play()
      setMessages(messages)
    }
    const replyCallback = ({ messages }) => {
      setMessages(messages)
    }
    await sendMessageToAssistant(
      threadId,
      inputValue,
      sendCallback,
      handleError
    )
    await getAssistantReply(threadId, replyCallback, handleError)
    setIsLoading(false)
  }

  function handleKeyDown(event) {
    if (!event.shiftKey && event.key === 'Enter') {
      event.preventDefault()
      handleEnter()
    }
  }

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true
    initiate()
  }, [])

  return (
    <div className="chat-box glass-card">
      {messages && messages.length > 0 && (
        <Messages
          messages={messages}
          isLoading={isLoading}
          hasError={hasError}
        />
      )}
      <div className="chat-box__input-container">
        <textarea
          className="chat-box__input"
          placeholder="Send a message..."
          type="text"
          value={inputValue}
          disabled={isLoading}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          type="submit"
          className="chat-box__submit"
          onClick={handleEnter}
          disabled={isLoading}
        >
          <span className="chat-box__submit-icon">🏹</span>
        </button>
      </div>
    </div>
  )
}

export default ChatBox
