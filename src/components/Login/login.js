import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import "./login.css";
import Pagebanner from "../comman/pagebanner";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import swal from "sweetalert";

const Login = () => {
  const [logdata, setLogdata] = useState({ name: "", password: "" });
  const navigate = useNavigate();
  const checkLogin = () => {
    const token = localStorage.getItem("token");

    if (token && token !== undefined) {
      navigate("/dashboard/admission");
    }
  };

  const handleChangelogin = (e) => {
    const { name, value } = e.target;
    setLogdata({ ...logdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user/login", logdata, {
        headers: {
          "cotent-Type": "application/json",
        },
      });
      const res = response?.data;
      if (res.code === 4000) {
        const acesstoken = response?.data?.access_token;
        localStorage.setItem("token", acesstoken);
        swal("Welcome", " Sucessfully Loged in", "success");
        navigate("/dashboard/admission");
      } else {
        swal("Invalid Details", "Enter Correct details", "error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkLogin();
  });
  return (
    <>
      <div className="login_body">
        <div className="login_container">
          <img
            height={120}
            width={120}
            src="data:image/jpeg;base64,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"
            alt="pr"
          />
          <Pagebanner head="login" />
          <form className="login_form">
            <TextField
              fullWidth
              name="name"
              label="Username"
              value={logdata.name}
              onChange={handleChangelogin}
            />
            <TextField
              fullWidth
              type={"password"}
              name="password"
              label="Password"
              value={logdata.password}
              onChange={handleChangelogin}
            />
            <Button variant="contained" onClick={handleSubmit}>
              Login
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
