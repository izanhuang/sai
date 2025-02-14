import { motion } from 'framer-motion'
import './LoadingMessage.css'

const LoadingMessage = () => {
  const DotsLoader = () => {
    return (
      <>
        {[0, 1, 2].map((_, i) => (
          <motion.span
            key={`loading-dot-${i}`}
            className="dot"
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
          />
        ))}
      </>
    )
  }

  return (
    <motion.p
      className="message message__assistant"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        ease: [0, 0.71, 0.2, 1],
      }}
      layout
    >
      <DotsLoader />
    </motion.p>
  )
}

export default LoadingMessage
