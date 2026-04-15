import { useEffect, useState } from "react";
import PostCard from "../components/PostCard.jsx";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`/api/posts/`);
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchPost();
  }, []);

  if (loading) return <p className="status-msg">Loading posts…</p>;
  if (error) return <p className="status-msg error">{error}</p>;

  return (
    <div className="blog-page">
      <div className="page-heading">
        <p className="eyebrow">Blog</p>
        <h1 className="page-title">All posts</h1>
        <p className="page-copy">
          Implement fetching posts from <code>/api/posts</code>.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="status-msg">
          No posts yet. Implement fetch logic in HomePage first.
        </p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post._id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
