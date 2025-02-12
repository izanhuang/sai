import { motion, useScroll, useSpring } from 'framer-motion'
import './Progress.css'

function Progress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="progress"
      initial={{ opacity: 0.3, scale: 1 }}
      animate={{ opacity: 1, scale: 1.25 }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      style={{ scaleX }}
    />
  )
}

export default Progress
