import './Messages.css'

type MessageProps = {
  key: string
  message: string
  role: string
}

const Message = ({ key, message, role }: MessageProps) => {
  return (
    <p key={key} className={`message message__${role}`}>
      {message}
    </p>
  )
}

export default Message
