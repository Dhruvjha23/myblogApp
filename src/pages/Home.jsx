import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home({ blogs, deleteBlog }) {
  console.log(blogs);  // Check the console to see the blogs data

  return (
    <div className="main-page">
      <div className="banner">
        <div className="banner-overlay">
          <h1>Welcome to Tech Blog</h1>
          <p>💻 Share your thoughts, ideas, and code with the world!</p>
        </div>
      </div>

      <header className="header">
        <h1>📝 My Blog Site</h1>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/add" className="nav-link add-post-btn">+ Add Post</Link>
        </nav>
      </header>

      <div className="container">
        {/* If there are no blogs, show this message */}
        {blogs.length === 0 ? (
          <p className="empty-message">No blog posts yet. Click “Add Post” to get started!</p>
        ) : (
          <div className="blog-list">
            {blogs.map(blog => (
              <div key={blog.id} className="blog-card">
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
                <div className="actions">
                  <Link to={`/edit/${blog.id}`} className="edit-btn">Edit</Link>
                  <button onClick={() => deleteBlog(blog.id)} className="delete-btn">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
