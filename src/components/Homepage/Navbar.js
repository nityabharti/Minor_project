import "./navbar.css";

import React, { useState } from "react";

const Navbar = () => {
  const [showMenue, setShowMenue] = useState(true);
  return (
    <>
      <nav className="main_nav">
        <div className="image_sec_nav">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtstzEy1Kge9rLE-XyAxH65V7NVaDBUf4orw&usqp=CAU"
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
            <a href="#skill">About Us</a>
          </li>
          <li>
            <a href="#project">Teachers</a>
          </li>
          <li>
            <a href="#experience">contact us</a>
          </li>
          <li>
            <button className="nav_btn">Admin </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
