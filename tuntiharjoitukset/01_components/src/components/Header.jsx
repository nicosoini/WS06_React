// A simple static component — no props, no state.
// React components are just functions that return JSX.

function Header() {
  return (
    <header className="header">
      <h1>React Components Demo</h1>
      <p>Functional components · Props · List rendering · useState</p>
    </header>
  )
}

export default Header
