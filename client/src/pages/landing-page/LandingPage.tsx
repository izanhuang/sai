import './LandingPage.css'
import ChatBox from '../../components/chat-box/ChatBox'
import ParallaxSection from '../../components/parallax-section/ParallaxSection'
import HeroText from './components/hero-text/HeroText'
import Progress from '../../components/progress/Progress'

function LandingPage() {
  const sections = [
    {
      title: <HeroText />,
    },
    {
      content: <ChatBox />,
    },
  ]

  return (
    <div>
      {sections.map(({ content, title }, i) => (
        <ParallaxSection key={i} content={content} title={title} />
      ))}
      <Progress />
    </div>
  )
}

export default LandingPage
