import { motion } from 'framer-motion'
import './Star.css'

type StarProps = {
  key: string
  top: string
  left: string
  size: string
  delay: number
}

function Star({ key, top, left, size, delay }: StarProps) {
  return (
    <motion.div
      className="star"
      key={key}
      initial={{ opacity: 0.3, scale: 1 }}
      animate={{ opacity: 1, scale: 1.5 }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'reverse',
        delay,
      }}
      style={{ top, left, width: size, height: size }}
    />
  )
}

export default Star
