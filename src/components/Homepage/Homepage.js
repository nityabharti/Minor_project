import "./Homepage.css";

import Navbar from "./Navbar";
import React from "react";
import Reviews from "./Reviews";
import Slider from "./Slider";

import Course from "./Course";
import Aboutus from "./About";

// import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <div className="homepage">
        <Aboutus />
        <Course />
      </div>
    </>
  );
};

export default Homepage;
