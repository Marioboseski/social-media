import { useNavigate } from "react-router-dom";


const MessageItem = ({ message }) => {
  const navigate = useNavigate();

  const handleOpenChat = () => {
    navigate(`/messages/${message.id}`);
  };


  return (
    <div onClick={handleOpenChat} className="flex items-end gap-3 border-b-2 w-full max-w-[500px]">
      <img src={message.avatar} alt="message-avatar-img" className="w-14 h-14 rounded-full object-cover" />
      <div className="flex flex-col ">
        <p className="font-semibold">{message.username}</p>
        <p>{message.lastMessage}</p>
      </div>
      <p>{message.time}</p>
    </div>
  );
}

export default MessageItem;