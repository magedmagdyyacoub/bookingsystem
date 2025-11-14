import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import { translations } from "../locales";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const { lang } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);
  const t = translations[lang];

  return (
    <footer
      className={`pt-5 pb-3 mt-auto ${
        darkMode ? "bg-dark text-light border-top border-secondary" : "bg-light text-dark border-top"
      }`}
    >
      <div className="container">
        <div className="row">
          {/* Column 1: About */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">{t.footerAboutTitle || "About Us"}</h5>
            <p>{t.footerAboutText || "We help you book and manage your appointments easily."}</p>
            <div className="d-flex gap-3 mt-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="social-link">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">{t.footerLinksTitle || "Quick Links"}</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">{t.home}</Link>
              </li>
              <li>
                <Link to="/book" className="footer-link">{t.book}</Link>
              </li>
              <li>
                <Link to="/list" className="footer-link">{t.bookings}</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">{t.contact || "Contact"}</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">{t.footerNewsletterTitle || "Newsletter"}</h5>
            <p>{t.footerNewsletterText || "Subscribe to our newsletter to stay updated."}</p>
            <form>
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder={t.emailPlaceholder || "Your Email"}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                {t.subscribe || "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-4" />
        <small className="d-block text-center mt-3">
          {t.footer || "© 2025 Booking App. All rights reserved."}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
