// src/components/Features.jsx
import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../locales";
import { FaClock, FaBell, FaClipboardList } from "react-icons/fa";
import "../styles/Features.css";

const featuresData = [
  { icon: <FaClock />, titleKey: "fastBooking", descKey: "fastBookingDesc" },
  { icon: <FaBell />, titleKey: "notifications", descKey: "notificationsDesc" },
  { icon: <FaClipboardList />, titleKey: "manageAppointments", descKey: "manageAppointmentsDesc" },
];

const Features = () => {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang];

  return (
    <section className="features py-5">
      <div className="container text-center">
        <h2 className="mb-5">{t.featuresTitle || "Our Features"}</h2>
        <div className="row">
          {featuresData.map((feature, idx) => (
            <div key={idx} className="col-md-4 mb-4">
              <div className="feature-card p-4 border rounded shadow-sm h-100">
                <div className="feature-icon mb-3">{feature.icon}</div>
                <h5 className="mb-2">{t[feature.titleKey]}</h5>
                <p>{t[feature.descKey]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
