import Message from './Message'

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
    <div>
      {messages.map((message) => (
        <Message key={message.id} message={message.content[0].text.value} />
      ))}
    </div>
  )
}

export default Messages
