import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../redux/actions';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.find((p) => p.id === parseInt(id)));
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!post) {
      navigate('/');
    }
  }, [post, navigate]);

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
      const updatedPost = {
        id: parseInt(id),
        title,
        content,
      };
      dispatch(editPost(parseInt(id), updatedPost));
      setSuccess('Post updated successfully!');
      setTimeout(() => {
        setSuccess('');
        navigate('/');
      }, 2000);
    }
  };

  return (
    <div className='Editpost-container'>
    <form onSubmit={handleSubmit}>
      <h1>Edit Post</h1>
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
      <button type="submit">Update Post</button>
    </form>
    </div>
  );
};

export default EditPost;
