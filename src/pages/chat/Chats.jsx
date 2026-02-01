const Chats = ({ chats }) => {
  return (
    <div>
      <p>{chats.sender}</p>
      <p>{chats.text}</p>
      <p>{chats.time}</p>
    </div>
  );
}

export default Chats;