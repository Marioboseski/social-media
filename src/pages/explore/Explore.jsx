import exploreData from "../../data/exploreData";
import { useState } from "react";
import usersData from "../../data/usersData";
import postsData from "../../data/postsData";
import searchUsers from "../../utils/searchUsers";
import SearchUserItem from "../../components/SearchUserItem";

const Explore = () => {

  const [query, setQuery] = useState("");

  const searchResults = searchUsers(query, usersData, postsData);

  return (
    <div className="flex flex-col justify-center items-center gap-2 p-2">
      <input type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border-2 border-gray-400 rounded-full p-1 text-lg" />

      {query.trim() ? (
        <div className="flex flex-col gap-3 w-full max-w-[400px] ">
          {searchResults.length > 0 ? (
            searchResults.map((user) => (
              <SearchUserItem key={user.id}
                avatar={user.avatar}
                username={user.username} />
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-[0.1rem]">
          {exploreData.map((explore) => (
            <img key={explore.id} src={explore.image} alt="explore-img" className=" w-full max-w-36 min-h-64 object-cover" />
          ))}
        </div>
      )}

    </div>
  );
}

export default Explore;