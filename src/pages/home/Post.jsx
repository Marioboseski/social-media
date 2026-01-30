import { Bookmark } from "lucide-react";
import { useBookmarks } from "../../context/BookmarksContext";

const Post = ({ post }) => {
  const { bookmarks, toggleBookmark } = useBookmarks();

  const isBookmarked = bookmarks.some(item => item.id === post.id);

  return (
    <div className="flex flex-col p-2 gap-2">
      
      <div className="flex gap-3 items-center">
        <img src={post.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
        <p>{post.username}</p>
        <post.VerifIcon />
      </div>

      <img src={post.post} alt="post" className="w-full max-w-[450px]" />

      <div className="flex gap-3 items-center">
        {post.icons.map((Icon, index) => (
          <Icon key={index} />
        ))}

        <button onClick={() => toggleBookmark(post)}>
          <Bookmark fill={isBookmarked ? "black" : "none"} />
        </button>
      </div>

      <div className="flex gap-1">
        <p className="font-semibold">{post.username}</p>
        <p>{post.caption}</p>
      </div>

    </div>
  );
};

export default Post;
