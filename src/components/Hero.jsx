import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../locales";
import { Link } from "react-router-dom";
import "../styles/Hero.css"; // ملف CSS للخلفية والـ overlay

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const t = translations[lang];

  // الخلفيات حسب الوضع
  const backgroundImage = darkMode
    ? "url('/images/hero-dark.jpg')"
    : "url('/images/hero-light2.jpg')";

  return (
  <section
  className="hero d-flex flex-column justify-content-start align-items-end text-end p-5"
  style={{
    minHeight: "80vh",
    backgroundImage: darkMode
      ? "url('/images/hero-dark.jpg')"
      : "url('/images/hero-light2.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 0.5s ease",
  }}
>
  <div className="overlay"></div>
  <div className="hero-content">
    <h1 className="display-4 fw-bold mb-3">{t.welcomeTitle}</h1>
    <p className="lead mb-4" style={{ maxWidth: "400px" }}>
      {t.welcomeSubtitle}
    </p>
    <div className="d-flex gap-3 justify-content-end">
      <Link to="/book" className="btn btn-primary btn-lg">
        {t.bookNow}
      </Link>
      <Link to="/list" className={`btn btn-outline-light btn-lg`}>
        {t.viewBookings}
      </Link>
    </div>
  </div>
</section>

  );
};

export default Hero;
