
import { useParams, Link } from 'react-router-dom';

function BlogPost({ posts }) {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="page">
        <h1>Post Not Found</h1>
        <Link to="/blog">Back to Blog List</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>{post.title}</h1>
      <p className="date">{post.date}</p>
      <p>{post.content}</p>
      <Link to="/blog">Back to Blog List</Link>
    </div>
  );
}

export default BlogPost;