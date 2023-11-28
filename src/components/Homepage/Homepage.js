import "./Homepage.css";

import Aboutus from "./About";
import Contact from "./Contact";
import Course from "./Course";
import Footer from "./Footer";
import Navbar from "./Navbar";
import React from "react";
import Reviews from "./Reviews";
import Slider from "./Slider";
import Teachers from "./Teachers";

// import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Slider />

      <div className="homepage">
        <Reviews />
        <Aboutus />
        <Course />
      </div>
      <Teachers />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
