import { useNavigate } from "react-router-dom";


const MessageItem = ({ message }) => {
  const navigate = useNavigate();

  const handleOpenChat = () => {
    navigate(`/messages/${message.id}`);
  };


  return (
    <div onClick={handleOpenChat}>
      <img src={message.avatar} alt="message-avatar-img" />
      <p>{message.username}</p>
      <p>{message.lastMessage}</p>
      <p>{message.time}</p>
    </div>
  );
}

export default MessageItem;