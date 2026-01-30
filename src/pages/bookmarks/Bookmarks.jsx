import Post from "../home/Post";
import { useBookmarks } from "../../context/BookmarksContext";

const Bookmarks = () => {
  const { bookmarks } = useBookmarks();

  if (bookmarks.length === 0) {
    return <p>No saved posts</p>;
  }

  return (
    <div>
      {bookmarks.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Bookmarks;
