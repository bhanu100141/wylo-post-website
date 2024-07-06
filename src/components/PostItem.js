import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePost } from '../redux/actions';
import LikeDislikeButton from './LikeDislikeButton';

const PostItem = ({ post }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  return (
    <div className='postitem'>
      <div className='avatar-info'>
      <img src='https://res.cloudinary.com/dgkru5vsg/image/upload/v1720265104/defaultIMG_kobhxm.webp' alt="User Avatar" className="avatar" />
      <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      </div>
      </div>
      <LikeDislikeButton />
      <button className='edit-button'>
        <Link className='edit' to={`/edit/${post.id}`}>Edit</Link>
      </button>
      <button className='delete-button' onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PostItem;
