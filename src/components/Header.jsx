import { NavLink } from "react-router-dom";
import Logo from '../assets/logo.png'

import './styles/Header.css'

const linkStyle = ({ isActive }) => ({
  fontWeight: isActive ? 600 : 500,
  opacity: isActive ? 1 : 0.75,
});

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        {/* Brand */}
        <div className="header__brand">
          <img className="header_logo" src={Logo} alt="PymSphere Logo" />
        </div>

        {/* Nav */}
        <nav className="header__nav">
          <NavLink to="/" style={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" style={linkStyle}>
            About
          </NavLink>
          <NavLink to="/offerings" style={linkStyle}>
            Offerings
          </NavLink>
          <NavLink to="/skincare-intelligence" style={linkStyle}>
            Skincare
          </NavLink>
          <NavLink to="/contact" style={linkStyle}>
            Contact
          </NavLink>
        </nav>

        {/* CTA */}
        <NavLink to="/contact" className="header__cta">
          Get Started
        </NavLink>
      </div>
    </header>
  );
}
