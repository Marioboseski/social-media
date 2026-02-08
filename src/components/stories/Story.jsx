const Story = ({ story, onOpen }) => {
  return (
    <div onClick={() => onOpen(story)} className="flex flex-col justify-center items-center cursor-pointer shrink-0">
      <img src={story.avatar} alt="story-avatar" className="w-16 h-16 rounded-full object-cover border-2 border-red-500" />
      <p className="text-xs">{story.username}</p>
    </div>
  );
}

export default Story;