import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import './nav.css'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e) => {
      if (!e.target.closest('.nav')) setMenuOpen(false)
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [menuOpen])

  return (
    <nav className="nav">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="AR Infotech" />
      </div>

      {/* Desktop nav links (hidden on mobile via CSS) */}
      <div className={`menu${menuOpen ? ' menu--open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Hamburger — only visible on mobile/tablet */}
      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Chat CTA — always visible on all screen sizes */}
      <a
        className="btn btn--primary nav__chat"
        href="https://wa.me/9430056407"
        target="_blank"
        rel="noreferrer noopener"
      >
        Chat
      </a>
    </nav>
  )
}

export default Nav
