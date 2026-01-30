import { createContext, useContext, useState } from "react";

export const BookmarksContext = createContext();

const BookmarksProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const toggleBookmark = (post) => {
    setBookmarks(prev => prev.some(item => item.id === post.id) ?
      prev.filter(item => item.id !== post.id) :
      [...prev, post]
    );
  }

  return (
    <BookmarksContext.Provider value={{bookmarks, toggleBookmark}}>
      {children}
    </BookmarksContext.Provider>    
  );
};

export const useBookmarks = () => useContext(BookmarksContext);
export default BookmarksProvider;