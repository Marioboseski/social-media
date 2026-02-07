const  searchUsers = (query, users, posts) =>  {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase();

  const matchedUsers = users.filter(user => {
    const usernameMatch = user.username
      .toLowerCase()
      .includes(normalizedQuery);

    const captionMatch = posts.some(post =>
      post.userId === user.id &&
      post.caption.toLowerCase().includes(normalizedQuery)
    );

    return usernameMatch || captionMatch;
  });

  return matchedUsers;
}

export default searchUsers;