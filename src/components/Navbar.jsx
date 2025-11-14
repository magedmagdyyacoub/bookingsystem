import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../locales';

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { lang, toggleLang } = useContext(LanguageContext);
  const t = translations[lang];

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'
      } px-4`}
    >
      <Link className="navbar-brand" to="/">
        {t.home}
      </Link>

    <div className="navbar-nav">
  <Link className="nav-link" to="/book">{t.book}</Link>
  <Link className="nav-link" to="/bookings">{t.bookings}</Link>
  <Link className="nav-link" to="/contact">{t.contact}</Link>
  <Link className="nav-link" to="/login">{t.login}</Link>
  <Link className="nav-link" to="/register">{t.register}</Link>
  <Link className="nav-link" to="/dashboard">{t.dashboard}</Link>
</div>


      <div className="ms-auto d-flex gap-2">
        <button className="btn btn-outline-secondary" onClick={toggleTheme}>
          {t.toggleTheme}
        </button>
        <button className="btn btn-outline-primary" onClick={toggleLang}>
          {t.toggleLang}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
