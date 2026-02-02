const Chats = ({ chats }) => {
  const isMe = chats.sender === "me";

  return (
    <div className={`p-2 rounded-lg
        ${isMe ? "self-end bg-blue-500 text-white" :
        "self-start bg-gray-200 text-black"
      }`} >
      {chats.text}
    </div>
  );
}


export default Chats;