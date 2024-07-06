import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PostItem from './PostItem';

const PostList = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <div className='postList-Container'>
      <h2>Posts</h2>
      <div>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
      <button className='postList-button'>
        <Link className='postList' to="/create">Create Post</Link>
      </button>
    </div>
  );
};

export default PostList;
