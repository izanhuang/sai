import Message from './Message'
import './Messages.css'

type MessagesProps = {
  messages: {
    id: string
    role: string
    content: {
      text: {
        annotations: string[]
        value: string
      }
      type: string
    }[]
  }[]
}

const Messages = ({ messages }: MessagesProps) => {
  return (
    <div className="messages">
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message.content[0].text.value}
          role={message.role}
        />
      ))}
    </div>
  )
}

export default Messages
