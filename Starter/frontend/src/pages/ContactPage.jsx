function ContactPage() {
  return (
    <section className="panel page-panel">
      <p className="eyebrow">Contact</p>
      <h1 className="page-title">Need help while building the API?</h1>
      <p className="page-copy">
        Review the TODO comments in the backend starter files, test one endpoint at a time, and keep the frontend requests pointed at the existing <code>/api/posts</code> routes.
      </p>
      <p className="page-copy">
        During development, run the React app through Vite and the backend separately. In production mode, Express can serve the React build and the API from the same host.
      </p>
    </section>
  )
}

export default ContactPage