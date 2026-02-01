import { useParams } from "react-router-dom";
import messagesData from "../../data/messagesData";
import chatsData from "../../data/chatsData";
import Chats from "./Chats";

const Chat = () => {
  const { id } = useParams();
  const chatMessages = chatsData[id];

  const chat = messagesData.find(message => message.id === Number(id));

  if(!chat || !chatMessages) {
    return <p>Chat not found</p>
  };

  return (
    <div>
      <img src={chat.avatar} alt="chat-avatar" />
      <p>{chat.username}</p>
      {chatMessages.map(chats => (
        <Chats key={chats.id} chats={chats}/>
      ))}
    </div>
  );
}

export default Chat;