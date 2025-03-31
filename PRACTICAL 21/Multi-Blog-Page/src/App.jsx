// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  const blogPosts = [
    { 
      id: 1, 
      title: 'First Post', 
      content: 'This is my first blog post with lots of content...', 
      date: '2025-03-01',
      category: 'General',
      author: 'John Doe',
      tags: ['intro', 'blogging']
    },
    { 
      id: 2, 
      title: 'React Tips', 
      content: 'Advanced React tips for developers...', 
      date: '2025-03-15',
      category: 'Programming',
      author: 'Jane Smith',
      tags: ['react', 'tips']
    },
    { 
      id: 3, 
      title: 'Router Guide', 
      content: 'Comprehensive guide to React Router...', 
      date: '2025-03-28',
      category: 'Programming',
      author: 'John Doe',
      tags: ['react', 'router']
    },
  ];

  return (
    <Router>
      <div className="App">
        <Navbar posts={blogPosts} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home posts={blogPosts} />} />
            <Route path="/blog" element={<BlogList posts={blogPosts} />} />
            <Route path="/blog/:id" element={<BlogPost posts={blogPosts} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;