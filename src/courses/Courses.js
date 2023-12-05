import "./courses.css";

import { Outlet } from "react-router-dom";
import Pagebanner from "../components/comman/pagebanner";
import React from "react";

const Courses = () => {
  return (
    <div className="Courses_detail">
      <Pagebanner head="Courses" />
      <Outlet />
    </div>
  );
};

export default Courses;
