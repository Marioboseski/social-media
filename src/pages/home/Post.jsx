const Post = ({ avatar, username, post, caption }) => {
  return (
    <div>
      <p>{username}</p>
      <img src={avatar} alt="avatar" className="w-full max-w-6 rounded-full"/>
      <img src={post} alt="post" className="w-full max-w-[450px]" />
      <p>{caption}</p>
    </div>
  );
}

export default Post;