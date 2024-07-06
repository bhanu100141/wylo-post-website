import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    if (!title || !content) {
      setError('Both title and content are required.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newPost = {
        id: Date.now(),
        title,
        content,
      };
      dispatch(addPost(newPost));
      setSuccess('Post created successfully!');
      setTimeout(() => {
        setSuccess('');
        navigate('/');
      }, 2000);
    }
  };

  return (
    <div className='create-post-container'>
    <form onSubmit={handleSubmit}>
      <h1 className='create-post'>Create Post</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Add Post</button>
    </form>
    </div>
  );
};

export default CreatePost;
