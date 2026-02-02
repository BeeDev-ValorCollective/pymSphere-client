import { NavLink } from "react-router-dom";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Left brand + blurb + badge */}
        <div className="footer__brandCol">
          <div className="footer__brand">PymSphere</div>
          <p className="footer__blurb">
            An AI-powered skincare companion designed to provide personalized suggestions and insights to enhance your skin's appearance through advanced technology.
          </p>

          <div
            className="footer__badge"
            aria-label="Veteran Owned and Operated"
          >
            <span className="footer__badgeIcon" aria-hidden="true">
              🛡️
            </span>
            <span>Veteran Owned &amp; Operated</span>
          </div>
        </div>

        {/* Link columns */}
        <div className="footer__cols">
          <div className="footer__col">
            <div className="footer__heading">Offerings</div>
            <NavLink to="/skincare-intelligence">Skincare Intelligence</NavLink>
            <NavLink to="/ai-assistant">AI Assistant</NavLink>
            <NavLink to="/custom-routines">Custom Routines</NavLink>
            <NavLink to="/hondo-platform">HONDO Platform</NavLink>
          </div>

          <div className="footer__col">
            <div className="footer__heading">Company</div>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/about">Our Mission</NavLink>
            <NavLink to="/careers">Careers</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <div className="footer__col">
            <div className="footer__heading">Support</div>
            <NavLink to="/help-center">Help Center</NavLink>
            <NavLink to="/privacy">Privacy Policy</NavLink>
            <NavLink to="/terms">Terms of Service</NavLink>
            <NavLink to="/security">Security</NavLink>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <div className="disclaimer">
          <p>Disclaimer: Our Skincare operating system is a cosmetic wellness tool for routine suggestions and entertainment. It does not diagnose or treat any conditions—consult a dermatologist for medical advice.</p>
        </div>
        <div className="tag">
          <p>© {new Date().getFullYear()} PymSphere</p>
          <p>Crafted by <a href="https://beedev-services.com">BeeDev Services</a></p>
        </div>
      </div>
    </footer>
  );
}
