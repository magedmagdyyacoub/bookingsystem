import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import BookingForm from "../components/BookingForm";
import Testimonials from "../components/Testimonials";
import Cities from "../components/Cities";
const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <BookingForm />
      <Cities />
      <Testimonials />
    </>
  );
};

export default Home;
