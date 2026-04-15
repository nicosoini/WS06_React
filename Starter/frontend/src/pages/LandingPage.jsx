import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="landing-page">
      <section className="hero-panel">
        <p className="eyebrow">WS06 React</p>
        <h1 className="hero-title">Move the full frontend into React without touching the API contract.</h1>
        <p className="hero-copy">
          This version keeps the existing blog CRUD flow, but the browser UI now lives in one React app instead of a set of server-rendered HTML pages.
        </p>

        <div className="hero-actions">
          <Link to="/blog" className="btn btn-primary">Open blog</Link>
          <Link to="/posts/new" className="btn btn-secondary">Write a post</Link>
        </div>
      </section>

      <section className="feature-grid">
        <article className="feature-card">
          <p className="eyebrow">Routing</p>
          <h2>React owns the browser routes</h2>
          <p>
            The landing page, info pages, blog list, and post detail views all render through client-side routing.
          </p>
        </article>

        <article className="feature-card">
          <p className="eyebrow">API</p>
          <h2>Express stays focused on data</h2>
          <p>
            The backend still exposes the same <code>/api/posts</code> endpoints, so the data layer remains stable during the migration.
          </p>
        </article>

        <article className="feature-card">
          <p className="eyebrow">Workflow</p>
          <h2>Development and production stay separate</h2>
          <p>
            Vite handles local frontend development, while Express can serve the production build as a single-page app.
          </p>
        </article>
      </section>

      <section className="panel section-panel">
        <div className="section-copy">
          <p className="eyebrow">What is included</p>
          <h2>One frontend, multiple views</h2>
          <p>
            The React app now covers the old landing page content, the workshop background pages, the blog list, and the post CRUD views.
          </p>
        </div>

        <div className="endpoint-list">
          <div><span>GET</span><code>/api/posts</code></div>
          <div><span>GET</span><code>/api/posts/:id</code></div>
          <div><span>POST</span><code>/api/posts</code></div>
          <div><span>PUT</span><code>/api/posts/:id</code></div>
          <div><span>DELETE</span><code>/api/posts/:id</code></div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage