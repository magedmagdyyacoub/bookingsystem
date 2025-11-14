// src/components/Cities.jsx
import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { citiesData } from "../data/cities";
import { Modal, Carousel, Button } from "react-bootstrap";
import "../styles/Cities.css";

const Cities = () => {
  const { darkMode } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);

  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleOpenModal = (city) => {
    setSelectedCity(city);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCity(null);
  };

  return (
    <section className={`cities py-5 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <div className="container">
        <h2 className="text-center mb-5">
          {lang === "en" ? "Explore Cities" : "اكتشف المدن"}
        </h2>
        <div className="row">
          {citiesData.map((city) => (
            <div key={city.id} className="col-md-6 col-lg-4 mb-4">
              <div
                className={`card city-card h-100 ${darkMode ? "bg-secondary text-light" : ""}`}
                onClick={() => handleOpenModal(city)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={city.image}
                  className="card-img-top"
                  alt={city.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{city.name}</h5>
                  <p className="mb-0">{lang === "en" ? "Click to view hotels" : "اضغط لعرض الفنادق"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Hotels */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        {selectedCity && (
          <>
            <Modal.Header closeButton className={darkMode ? "bg-dark text-light" : ""}>
              <Modal.Title>{selectedCity.name} {lang === "en" ? "Hotels" : "الفنادق"}</Modal.Title>
            </Modal.Header>
            <Modal.Body className={darkMode ? "bg-dark text-light" : ""}>
              <Carousel>
                {selectedCity.hotels.map((hotel) => (
                  <Carousel.Item key={hotel.id}>
                    <img
                      className="d-block w-100"
                      src={hotel.image}
                      alt={hotel.name}
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                    <Carousel.Caption>
                      <h5>{hotel.name}</h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Modal.Body>
            <Modal.Footer className={darkMode ? "bg-dark text-light" : ""}>
              <Button variant={darkMode ? "light" : "secondary"} onClick={handleCloseModal}>
                {lang === "en" ? "Close" : "اغلاق"}
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Cities;
