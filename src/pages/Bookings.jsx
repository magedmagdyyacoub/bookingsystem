import React, { useState } from "react";
import { citiesData } from "../data/cities";
import "../styles/booking.css"; // تأكد إن الملف موجود فعلاً

const Booking = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  const handleBack = () => {
    setSelectedCity(null);
  };

  return (
    <div className="booking-page">
      <h1 className="booking-title">Book Your Stay</h1>

      {/* ✅ عرض المدن */}
      {!selectedCity ? (
        <div className="cities-grid">
          {citiesData.length > 0 ? (
            citiesData.map((city) => (
              <div
                key={city.id}
                className="city-card"
                onClick={() => handleCityClick(city)}
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="city-image"
                  onError={(e) => (e.target.style.display = "none")}
                />
                <h3>{city.name}</h3>
              </div>
            ))
          ) : (
            <p className="no-data">No cities available.</p>
          )}
        </div>
      ) : (
        /* ✅ عرض الفنادق */
        <div className="hotels-section">
          <button onClick={handleBack} className="back-btn">
            ← Back
          </button>
          <h2 className="city-name">{selectedCity.name} Hotels</h2>

          {selectedCity.hotels && selectedCity.hotels.length > 0 ? (
            <div className="hotels-grid">
              {selectedCity.hotels.map((hotel) => (
                <div key={hotel.id} className="hotel-card">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="hotel-image"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                  <h4>{hotel.name}</h4>
                  <button className="book-btn">Book Now</button>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-data">No hotels found in this city.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Booking;
