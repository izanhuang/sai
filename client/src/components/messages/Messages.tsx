import Message from './Message'
import './Messages.css'
import { motion } from 'framer-motion'

type MessagesProps = {
  messages: {
    id: string
    role: string
    text: string
  }[]
  hasError: boolean
}

const Messages = ({ messages, hasError }: MessagesProps) => {
  return (
    <div className="messages">
      {messages.map((message) => (
        <Message key={message.id} message={message.text} role={message.role} />
      ))}
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
