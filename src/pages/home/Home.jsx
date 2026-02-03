import Post from "./Post";
import postsData from "../../data/postsData";
import Stories from "../../components/stories/Stories";

const Home = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center gap-2">
        <Stories/>
        {postsData.map((post) => (
          <Post
            key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;