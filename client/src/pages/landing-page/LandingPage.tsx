import './LandingPage.css'
import ChatBox from '../../components/chat-box/ChatBox'
import StarField from '../../components/star-field/StarField'
import HeroText from './components/hero-text/HeroText'
import Progress from '../../components/progress/Progress'

function LandingPage() {
  const views = [
    {
      text: <HeroText />,
      content: undefined,
    },
    {
      text: undefined,
      content: <ChatBox />,
    },
  ]

  return (
    <div>
      {views.map(({ content, text }, i) => (
        <StarField key={i} content={content} text={text} />
      ))}
      <Progress />
    </div>
  )
}

export default LandingPage
