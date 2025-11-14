import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import { translations } from "../locales";
import { citiesData } from "../data/cities"; // 👈 هنا الاستيراد الجديد

const BookingForm = () => {
  const { lang } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);
  const t = translations[lang];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    hotel: "",
    date: null,
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "city") {
      setFormData({ ...formData, city: value, hotel: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.city || !formData.hotel || !formData.date || !formData.time) {
      Swal.fire({
        icon: "error",
        title: t.bookingError || "Please complete all fields!",
      });
      return;
    }

    const newBooking = {
      name: formData.name,
      email: formData.email,
      city: formData.city,
      hotel: formData.hotel,
      date: formData.date.toLocaleDateString(),
      time: formData.time,
    };

    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    existing.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(existing));

    Swal.fire({
      icon: "success",
      title: t.bookingSuccess || "Booking Confirmed!",
      text: `${formData.name}, ${t.bookingMessage || "your booking is received."} (${formData.city} - ${formData.hotel})`,
    });

    setFormData({ name: "", email: "", city: "", hotel: "", date: null, time: "" });
  };

  // المدن
  const selectedCity = citiesData.find((c) => c.name === formData.city);

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center">{t.bookingFormTitle || "Book Your Appointment"}</h2>

        <form
          onSubmit={handleSubmit}
          className={`mx-auto p-4 rounded shadow ${darkMode ? "bg-dark text-light" : "bg-white"}`}
          style={{ maxWidth: "600px" }}
        >
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              placeholder={t.namePlaceholder || "Your Name"}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder={t.emailPlaceholder || "Your Email"}
              required
            />
          </div>

          <div className="mb-3">
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="">{t.cityPlaceholder || "Select City"}</option>
              {citiesData.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          {selectedCity && (
            <div className="mb-3">
              <select
                name="hotel"
                value={formData.hotel}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="">{t.hotelPlaceholder || "Select Hotel"}</option>
                {selectedCity.hotels.map((hotel) => (
                  <option key={hotel} value={hotel}>
                    {hotel}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="mb-3">
            <DatePicker
              selected={formData.date}
              onChange={(date) => setFormData({ ...formData, date })}
              className="form-control"
              placeholderText={t.datePlaceholder || "Select Date"}
              minDate={new Date()}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            {t.bookNow || "Book Now"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
