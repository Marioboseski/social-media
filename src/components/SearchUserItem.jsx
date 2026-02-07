const SearchUserItem = ({ avatar, username }) => {
  return (
    <div className="flex items-center gap-2 p-1 border-b-2 border-gray-300 w-full ">
      <img src={avatar} alt={username} className="w-12 h-12 rounded-full object-cover" />
      <p className="text-lg">{username}</p>
    </div>
  );
}

export default SearchUserItem;