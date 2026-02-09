import Post from "../home/Post";
import { useBookmarks } from "../../context/BookmarksContext";
import { CameraOff } from "lucide-react";

const Bookmarks = () => {
  const { bookmarks } = useBookmarks();

  if (bookmarks.length === 0) {
    return <div className="flex flex-col justify-center items-center text-center gap-3 min-h-dvh" >
      <p className="text-xl">No saved posts</p>
      <CameraOff className="w-full max-w-44 min-h-44" />
    </div>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {bookmarks.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Bookmarks;
