import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';

const Posts = () => {

  const [posts,setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(response => response.json())
    .then(data => setPosts(data))
  },[])

  return (
    <div>
      {posts.map((post) => (
        <PostItem
          id={post.id}
          title={post.title}
          userId={post.userId}
          body={post.body}
        />
      ))}
    </div>
  );
};

export default Posts;