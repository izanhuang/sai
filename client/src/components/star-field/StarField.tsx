import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Stars from './components/stars/Stars'
import './StarField.css'

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function StarField({
  key,
  content,
  text,
}: {
  key: number
  content: string
  text: string
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <section key={key} className="star-field">
      <div ref={ref}>
        {content}
        <Stars />
      </div>
      <motion.div
        className="star-field__text"
        initial={{ visibility: 'hidden' }}
        animate={{ visibility: 'visible' }}
        style={{ y }}
      >
        {text}
      </motion.div>
    </section>
  )
}

export default StarField
