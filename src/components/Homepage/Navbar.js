import "./navbar.css";

import React, { useState } from "react";

const Navbar = () => {
  return (
    <>
      <nav className="main_nav">
        <div className="image_sec">
          <img
            height={40}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtstzEy1Kge9rLE-XyAxH65V7NVaDBUf4orw&usqp=CAU"
            alt=""
          />
          <img
            height={40}
            src="https://cdn-icons-png.flaticon.com/128/6015/6015685.png"
          />
        </div>
        <ul className="nav_items">
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
        </ul>
        <button>Admin </button>
      </nav>
    </>
  );
};

export default Navbar;