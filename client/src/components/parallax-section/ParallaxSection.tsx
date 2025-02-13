import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Stars from './components/stars/Stars'
import './ParallaxSection.css'

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function ParallaxSection({
  key,
  content,
  title,
}: {
  key: number
  content: string
  title: string
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <section key={key} className="parallax-section">
      <div ref={ref}>
        {content}
        <Stars />
      </div>
      <motion.div
        className="parallax-section__text-wrapper"
        initial={{ visibility: 'hidden' }}
        animate={{ visibility: 'visible' }}
        style={{ y }}
      >
        {title}
      </motion.div>
    </section>
  )
}

export default ParallaxSection
