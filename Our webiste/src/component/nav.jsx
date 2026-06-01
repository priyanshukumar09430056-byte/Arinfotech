import { Link } from 'react-router-dom'
import logo from '../assets/Arinfotech.png'
import './nav.css'

const Nav = () => (
  <nav className="nav">
    <div className="logo">
      <img src={logo} alt="AR Infotech" />
    </div>
    <div className="menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><a className="btn btn--primary" href="https://wa.me/9430056407" target="_blank" rel="noreferrer noopener">Chat</a></li>
      </ul>
    </div>
  </nav>
)

export default Nav
