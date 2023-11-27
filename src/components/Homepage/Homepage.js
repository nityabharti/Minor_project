import "./Homepage.css";

import Navbar from "./Navbar";
import React from "react";
import Reviews from "./Reviews";
import Slider from "./Slider";

// import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Reviews />

      <div>
        {/* <h1>Welcome to the Home Page</h1> */}
        {/* <Link to="/login">Login</Link> */}
      </div>
    </>
  );
};

export default Homepage;
