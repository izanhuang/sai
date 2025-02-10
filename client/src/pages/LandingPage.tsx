import ChatBox from '../components/chat-box/ChatBox'
import StarField from '../components/star-field/StarField'
import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero">
        <div className="backdrop" />
        <StarField />
        <div className="content">
          <h1>Welcome to SAI.</h1>
          <h2>A self-improvement AI</h2>
        </div>
      </div>
      <ChatBox />
    </div>
  )
}

export default LandingPage
