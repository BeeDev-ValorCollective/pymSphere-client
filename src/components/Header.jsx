import { NavLink } from "react-router-dom";

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
          <span className="header__logo" aria-hidden />
          <span className="header__name">PymSphere</span>
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
