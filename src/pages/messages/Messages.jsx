import messagesData from "../../data/messagesData";
import MessageItem from "./MessageItem";


const Messages = () => {
  return (
    <div>
      {messagesData.map((message) => (
        <MessageItem key={message.id} message={message}/>
      ))}
    </div>
  );
}

export default Messages;