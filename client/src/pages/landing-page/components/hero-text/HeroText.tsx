import { motion } from 'framer-motion'
import './HeroText.css'

const HeroText = () => {
  const easeInTransition = (delay = 0) => ({
    duration: 0.5,
    delay: delay,
    ease: [0, 0.7, 0.75, 1],
  })

  return (
    <>
      <motion.h1
        className="hero-text_title"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={easeInTransition()}
      >
        Welcome to SAI.
      </motion.h1>
      <motion.h2
        className="hero-text_subtitle"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={easeInTransition(0.1)}
      >
        A self-improvement AI
      </motion.h2>
    </>
  )
}

export default HeroText
