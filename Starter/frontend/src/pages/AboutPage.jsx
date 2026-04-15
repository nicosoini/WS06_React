function AboutPage() {
  return (
    <section className="panel page-panel">
      <p className="eyebrow">About</p>
      <h1 className="page-title">Why this workshop exists</h1>
      <p className="page-copy">
        This workshop links earlier server-side routing exercises with database-backed API design. The browser still requests pages, but now React owns the presentation layer while Express keeps the resource endpoints available underneath.
      </p>
      <p className="page-copy">
        The goal is not to redesign the backend contract. The goal is to replace multiple HTML entry points with one frontend application that can render each view through client-side routing.
      </p>
    </section>
  )
}

export default AboutPage