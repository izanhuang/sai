import Star from './components/star/Star'
import './StarField.css'

function StarField() {
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: `star-${i}`,
    top: Math.random() * 50 + 'vh',
    left: Math.random() * 100 + 'vw',
    size: Math.random() * 2 + 'px',
    delay: Math.random() * 2,
  }))

  return (
    <div className="star-field">
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}
    </div>
  )
}

export default StarField
