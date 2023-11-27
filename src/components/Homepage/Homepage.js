import "./Homepage.css";

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
      <Reviews />
      <ReviewSlider />

      <div>
        {/* <h1>Welcome to the Home Page</h1> */}
        {/* <Link to="/login">Login</Link> */}
      </div>
    </>
  );
};

export default Homepage;
