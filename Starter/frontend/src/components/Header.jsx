import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand">WS06 React</Link>
        <nav className="nav">
          {/* TODO (student): Add navigation links as you complete routes. */}
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          {/* Suggested links to add: /about, /contact, /posts/new */}
        </nav>
      </div>
    </header>
  )
}

export default Header
