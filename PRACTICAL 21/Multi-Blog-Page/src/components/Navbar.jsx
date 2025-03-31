// src/components/Navbar.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ posts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate('/blog', { state: { search: searchTerm } });
    }
  };

  const categories = [...new Set(posts.map(post => post.category))];

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">My Blog</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
      </div>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search posts..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="categories">
        {categories.map(category => (
          <Link 
            key={category} 
            to="/blog" 
            state={{ category }}
            className="category-link"
          >
            {category}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;