import messagesData from "../../data/messagesData";
import MessageItem from "./MessageItem";


const Messages = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      {messagesData.map((message) => (
        <MessageItem key={message.id} message={message}/>
      ))}
    </div>
  );
}

export default Messages;