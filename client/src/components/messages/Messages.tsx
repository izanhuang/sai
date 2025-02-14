import LoadingMessage from './loading-message/LoadingMessage'
import Message from './message/Message'
import './Messages.css'
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

type MessagesProps = {
  messages: {
    id: string
    role: string
    text: string
  }[]
  isLoading: boolean
  hasError: boolean
}

const Messages = ({ messages, isLoading, hasError }: MessagesProps) => {
  const messagesRef = useRef(null)

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages])

  return (
    <div ref={messagesRef} className="messages">
      {messages.map((message) => (
        <Message key={message.id} message={message.text} role={message.role} />
      ))}
      {isLoading && <LoadingMessage />}
      {hasError && (
        <motion.div
          className="messages__error"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.2 },
          }}
          style={{ x: '-50%' }}
        >
          <span>Try again or come back later.</span>
        </motion.div>
      )}
    </div>
  )
}

export default Messages
