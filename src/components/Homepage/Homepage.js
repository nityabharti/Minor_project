import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* <h1>Welcome to the Home Page</h1> */}
        {/* <Link to="/login">Login</Link> */}
      </div>
    </>
  );
};

export default Homepage;
