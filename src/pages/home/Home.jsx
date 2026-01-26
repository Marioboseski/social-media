import Post from "./Post";
import postsData from "../../data/postsData";

const Home = () => {
  return (
    <div>
      {postsData.map((post) => (
        <Post
          key={post.id}
          avatar={post.avatar}
          username={post.username}
          post={post.post}
          caption={post.caption} />
      ))}
    </div>
  );
}

export default Home;