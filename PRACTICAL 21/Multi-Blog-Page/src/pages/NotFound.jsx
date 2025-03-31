// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="back-link">Return to Home</Link>
    </div>
  );
}

export default NotFound;