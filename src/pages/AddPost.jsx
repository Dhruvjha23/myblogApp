import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';

function AddPost({ addBlog }) {
  const navigate = useNavigate();

  const handleSubmit = (blog) => {
    addBlog(blog);
    navigate('/');
  };

  return <BlogForm onSubmit={handleSubmit} />;
}

export default AddPost;