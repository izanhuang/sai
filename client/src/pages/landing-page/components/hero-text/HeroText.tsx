import { motion } from 'framer-motion'
import './HeroText.css'

const HeroText = () => {
  const easeInTransition = (delay = 0) => ({
    duration: 0.5,
    delay: delay,
    ease: 'easeInOut',
  })

  return (
    <>
      <motion.h1
        className="hero-text__title"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={easeInTransition()}
      >
        Welcome to SAI.
      </motion.h1>
      <motion.h2
        className="hero-text__subtitle"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={easeInTransition(0.05)}
      >
        A self-improvement AI
      </motion.h2>
      <motion.span
        className="hero-text__caption"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={easeInTransition(0.1)}
      >
        Powered by GPT-3.5-Turbo
      </motion.span>
    </>
  )
}

export default HeroText
