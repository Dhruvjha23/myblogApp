import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';

function EditPost({ blogs, updateBlog }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogToEdit = blogs.find(blog => blog.id === Number(id));

  const handleSubmit = (updatedBlog) => {
    updateBlog({ ...updatedBlog, id: Number(id) });
    navigate('/');
  };

  return <BlogForm onSubmit={handleSubmit} initialData={blogToEdit} />;
}

export default EditPost;
