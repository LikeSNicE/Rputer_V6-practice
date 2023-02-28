import React, { useEffect, useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import PostItem from './PostItem';
import { Link } from 'react-router-dom';

const Posts = () => {

  const [posts,setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(response => response.json())
    .then(data => setPosts(data))
  },[])

  const onRemove = (id) => {
     setPosts(posts.filter((post) => post.id !== id));
  }

  return (
    <div>
      {posts.map((post) => (
        <Link to={`/posts/${post.id}`}>
          <PostItem
            id={post.id}
            title={post.title}
            userId={post.userId}
            body={post.body}
            onRemove={onRemove}
          />
        </Link>
      ))}
    </div>
  );
};

export default Posts;