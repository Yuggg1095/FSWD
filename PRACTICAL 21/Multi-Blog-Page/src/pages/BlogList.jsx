// src/pages/BlogList.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function BlogList({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const location = useLocation();

  useEffect(() => {
    const { search, category } = location.state || {};
    let filtered = [...posts];
    
    if (search) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.content.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    if (category) {
      filtered = filtered.filter(post => post.category === category);
    }
    
    setFilteredPosts(filtered);
  }, [location.state, posts]);

  return (
    <div className="page blog-list-page">
      <h1>Blog Posts</h1>
      {filteredPosts.length === 0 ? (
        <p>No posts found matching your criteria.</p>
      ) : (
        <div className="blog-grid">
          {filteredPosts.map(post => (
            <div key={post.id} className="blog-card">
              <Link to={`/blog/${post.id}`}>
                <h2>{post.title}</h2>
                <p className="meta">
                  {post.date} | {post.category} | By {post.author}
                </p>
                <p className="excerpt">
                  {post.content.substring(0, 100)}...
                </p>
                <div className="tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogList;