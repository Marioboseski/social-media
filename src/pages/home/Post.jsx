const Post = ({ avatar, username, post, caption, icons }) => {
  return (
    <div className="flex flex-col p-2 gap-2">
      <div className="flex gap-3 items-center ">
        <img src={avatar} alt="avatar" className="w-full max-w-6 rounded-full" />
        <p>{username}</p>
      </div>
      <img src={post} alt="post" className="w-full max-w-[450px]" />
      <div className="flex gap-3">
        {icons.map((Icon, index) => (
          <Icon key={index} />
        ))}
      </div>
      <div className="flex gap-3">
        <p>{username}</p>
        <p>{caption}</p>
      </div>
    </div>
  );
}

export default Post;