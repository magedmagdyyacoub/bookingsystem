// src/components/Testimonials.jsx
import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import { translations } from "../locales";
import { Carousel } from "react-bootstrap";
import "../styles/Testimonials.css";

const testimonialsData = [
  { name: "John Doe", message: "This app made booking so easy!" },
  { name: "Jane Smith", message: "Highly recommend for managing appointments." },
  { name: "Ahmed Ali", message: "Fast and reliable service!" },
];

const Testimonials = () => {
  const { lang } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);
  const t = translations[lang];

  return (
    <section
      className={`testimonials py-5 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      <div className="container text-center">
        <h2 className="mb-5">{t.testimonialsTitle || "What Our Clients Say"}</h2>
        <Carousel indicators={false}>
          {testimonialsData.map((item, idx) => (
            <Carousel.Item key={idx}>
              <p className="lead" style={{ color: darkMode ? "#f8f9fa" : "#212529" }}>
                "{item.message}"
              </p>
              <h6 className="fw-bold mt-3" style={{ color: darkMode ? "#f8f9fa" : "#212529" }}>
                {item.name}
              </h6>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
