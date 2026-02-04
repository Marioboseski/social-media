import { useParams } from "react-router-dom";
import messagesData from "../../data/messagesData";
import chatsData from "../../data/chatsData";
import Chats from "./Chats";

const Chat = () => {
  const { id } = useParams();
  const chatMessages = chatsData[id];

  const chat = messagesData.find(message => message.id === Number(id));

  if (!chat || !chatMessages) {
    return <p>Chat not found</p>
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center gap-3 p-2 bg-red-200 w-full max-w-[500px]">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={chat.avatar} alt="chat-avatar" className="w-16 h-16 rounded-full object-cover" />
          <p>{chat.username}</p>
        </div>
        <div className="flex flex-col">
          {chatMessages.map(chats => (
            <Chats key={chats.id} chats={chats} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chat;