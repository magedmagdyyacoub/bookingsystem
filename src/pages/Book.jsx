import React, { useContext } from "react";
import BookingForm from "../components/BookingForm";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../locales";

const Book = () => {
  const { darkMode } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const t = translations[lang];

  return (
    <section
      className={`py-5 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
      style={{ minHeight: "80vh" }}
    >
      <div className="container">
        <h2 className="text-center mb-4">{t.bookNow || "Book Your Appointment"}</h2>
        <BookingForm />
      </div>
    </section>
  );
};

export default Book;
