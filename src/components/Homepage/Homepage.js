import "./Homepage.css";

import Aboutus from "./About";
import Course from "./Course";
import Navbar from "./Navbar";
import React from "react";
import ReviewSlider from "./ReviewSlider";
import Reviews from "./Reviews";
import Slider from "./Slider";

// import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <div className="homepage">
        <Aboutus />
        <Reviews />
        <Course />
      </div>
    </>
  );
};

export default Homepage;
