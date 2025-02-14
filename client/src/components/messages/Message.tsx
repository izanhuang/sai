import './Messages.css'
import { motion } from 'framer-motion'

type MessageProps = {
  key: string
  message: string
  role: string
}

const Message = ({ key, message, role }: MessageProps) => {
  return (
    <motion.p
      key={key}
      className={`message message__${role}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        ease: [0, 0.71, 0.2, 1],
      }}
    >
      {message}
    </motion.p>
  )
}

export default Message
