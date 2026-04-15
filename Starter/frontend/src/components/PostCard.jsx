import { Link } from 'react-router-dom'

// A presentational component — receives a post object via props
// and renders a card. No state, no side effects.
function PostCard({ post }) {
  const date = new Date(post.createdAt).toLocaleDateString('fi-FI', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="post-card">
      <div className="post-card-meta">
        <span className="author">{post.author}</span>
        <time>{date}</time>
      </div>
      <h2 className="post-card-title">
        <Link to={`/posts/${post._id}`}>{post.title}</Link>
      </h2>
      <p className="post-card-excerpt">
        {post.content.slice(0, 160)}{post.content.length > 160 && '…'}
      </p>
      <Link to={`/posts/${post._id}`} className="read-more">Read more →</Link>
    </article>
  )
}

export default PostCard
