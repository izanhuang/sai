const Message = ({ key, message }: { key: string; message: string }) => {
  return <p key={key}>{message}</p>
}

export default Message
