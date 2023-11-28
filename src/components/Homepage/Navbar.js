import "./navbar.css";

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMenue, setShowMenue] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <nav className="main_nav">
        <div className="image_sec_nav">
          <img
            src="https://www.shutterstock.com/image-vector/vector-icon-illustration-digital-media-600nw-1175859982.jpg"
            alt="logo"
          />

          <img
            onClick={() => {
              setShowMenue(!showMenue);
            }}
            className="hamburger"
            src="https://cdn-icons-png.flaticon.com/128/6015/6015685.png"
            alt="hamburger"
          />
        </div>
        <ul className={`${showMenue ? "nav_items" : "nav_items_mobile"}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#courses">Courses</a>
          </li>
          <li>
            <a href="#teachers">Teachers</a>
          </li>

          <li>
            <a href="contact">contact us</a>
          </li>
          <li>
            <button
              className="nav_btn"
              onClick={() => {
                navigate("/login");
              }}
            >
              Admin{" "}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
