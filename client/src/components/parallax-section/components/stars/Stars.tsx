import Star from '../star/Star'

function StarField() {
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: `star-${i}`,
    top: Math.random() * 100 + 'vh',
    left: Math.random() * 100 + 'vw',
    size: Math.random() * 2 + 'px',
    delay: Math.random() * 2,
  }))

  return (
    <div>
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}
    </div>
  )
}

export default StarField
