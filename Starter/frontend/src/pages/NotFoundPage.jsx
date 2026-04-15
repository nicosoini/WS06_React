import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="panel page-panel page-panel-centered">
      <p className="eyebrow">404</p>
      <h1 className="page-title">That route does not exist in the React app.</h1>
      <p className="page-copy">
        The request reached the frontend, but no matching client-side route was found.
      </p>
      <Link to="/" className="btn btn-primary">Back to landing page</Link>
    </section>
  )
}

export default NotFoundPage