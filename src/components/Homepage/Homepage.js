import "./Homepage.css";

import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import React from "react";
import Slider from "./Slider";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Slider />

      <div>
        {/* <h1>Welcome to the Home Page</h1> */}
        {/* <Link to="/login">Login</Link> */}
      </div>
    </>
  );
};

export default Homepage;
