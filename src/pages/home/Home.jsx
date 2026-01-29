import Post from "./Post";
import postsData from "../../data/postsData";

const Home = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center gap-2">
        {postsData.map((post) => (
          <Post
            key={post.id}
            avatar={post.avatar}
            username={post.username}
            post={post.post}
            caption={post.caption} 
            icons={post.icons}
            VerifIcon={post.VerifIcon}/>
        ))}
      </div>
    </div>
  );
}

export default Home;