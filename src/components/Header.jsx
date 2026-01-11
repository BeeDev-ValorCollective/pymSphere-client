import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  opacity: isActive ? 1 : 0.8,
  fontWeight: isActive ? 700 : 500,
});

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__brand">PymSphere</div>

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
            Skincare Intelligence
          </NavLink>
          <NavLink to="/contact" style={linkStyle}>
            Contact
          </NavLink>
        </nav>

        <NavLink to="/contact" className="btn btn--primary">
          Get Started
        </NavLink>
      </div>
    </header>
  );
}
