// src/pages/UserDashboard.jsx
import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../locales";
import "../styles/dashboard.css";

const UserDashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const t = translations[lang]; 

  const [user] = useState({
    name: "Maged Magdy",
    email: "maged@example.com",
  });

  const [bookings, setBookings] = useState([
    {
      id: 1,
      city: "Cairo",
      hotel: "Cairo Hotel 1",
      date: "2025-12-01",
      status: "Confirmed",
    },
    {
      id: 2,
      city: "Dubai",
      hotel: "Palm Resort",
      date: "2025-12-10",
      status: "Pending",
    },
  ]);

  const handleCancel = (id) => {
    setBookings(
      bookings.map((b) =>
        b.id === id ? { ...b, status: "Cancelled" } : b
      )
    );
  };

  return (
    <div className={`dashboard-page ${darkMode ? "dark" : ""}`}>
      <h1 className="dashboard-title">{t.dashboardTitle || "User Dashboard"}</h1>

      <section className="user-info">
        <h2>
          {t.welcome || "Welcome"}, {user.name} 👋
        </h2>
        <p>
          {t.email || "Email"}: {user.email}
        </p>
      </section>

      <section className="booking-history">
        <h3>{t.yourBookings || "Your Bookings"}</h3>
        {bookings.length > 0 ? (
          <table className="booking-table">
            <thead>
              <tr>
                <th>{t.city || "City"}</th>
                <th>{t.hotel || "Hotel"}</th>
                <th>{t.date || "Date"}</th>
                <th>{t.status || "Status"}</th>
                <th>{t.action || "Action"}</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.city}</td>
                  <td>{booking.hotel}</td>
                  <td>{booking.date}</td>
                  <td className={`status ${booking.status.toLowerCase()}`}>
                    {t[booking.status.toLowerCase()] || booking.status}
                  </td>
                  <td>
                    {booking.status === "Cancelled" ? (
                      <span className="disabled-btn">
                        {t.cancelled || "Cancelled"}
                      </span>
                    ) : (
                      <button
                        className="cancel-btn"
                        onClick={() => handleCancel(booking.id)}
                      >
                        {t.cancel || "Cancel"}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>{t.noBookings || "You have no bookings yet."}</p>
        )}
      </section>
    </div>
  );
};

export default UserDashboard;
