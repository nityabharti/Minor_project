import "./dashboard.css";

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SubjectIcon from "@mui/icons-material/Subject";
import axios from "../../api/axios";
import swal from "sweetalert";
import { useAuthContextProvider } from "../../Context/Authcontext";

const Dashboard = () => {
  const user = useAuthContextProvider();
  const navigate = useNavigate();
  const getUser = (token) => {
    axios
      .get(`/user/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        user.updateUser(res?.data);
      })
      .catch((eror) => {
        if (eror?.response?.status === 401) {
          swal("Error happend", "", "error");
          localStorage.removeItem("token");
          navigate("/");
        }
      });
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    getUser(token);
  }, []);
  return (
    <div>
      <div className="main_bord">
        <div className="nav_section">
          <div className="profile_sec">
            <div className="profile">
              <img
                height={60}
                width={60}
                src="https://cdn-icons-png.flaticon.com/128/1864/1864509.png"
                alt="pr"
              />
              <div className="user">
                <p>{user.userdata.name}</p>
                <p>{user.userdata.location}</p>
              </div>
            </div>
            <div className="button_sec">
              <NavLink to="/dashboard/admission" className="btns">
                <PersonAddAlt1Icon fontSize="large" />
                <p>New Admisssion </p>
              </NavLink>
              <NavLink to="/dashboard/students" className="btns">
                <SearchOutlinedIcon fontSize="large" />
                <p>old Student </p>
              </NavLink>
              <NavLink to="/dashboard/addfee" className="btns">
                <CurrencyRupeeIcon fontSize="large" />
                <p>Add Fee </p>
              </NavLink>
              <NavLink to="/dashboard/course" className="btns">
                <SubjectIcon fontSize="large" />
                <p>Courses </p>
              </NavLink>
              <button
                className="btns logbtns"
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="main_section">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
