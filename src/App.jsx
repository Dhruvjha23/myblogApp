import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';

function App() {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, { ...newBlog, id: Date.now() }]);
  };

  const updateBlog = (updatedBlog) => {
    setBlogs(blogs.map(blog => blog.id === updatedBlog.id ? updatedBlog : blog));
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home blogs={blogs} deleteBlog={deleteBlog} />} />
        <Route path="/add" element={<AddPost addBlog={addBlog} />} />
        <Route path="/edit/:id" element={<EditPost blogs={blogs} updateBlog={updateBlog} />} />
      </Routes>
    </Router>
  );
}

export default App;
