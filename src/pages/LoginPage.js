import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
const { setToken } = require("../redux/appSlice");

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const formData = new FormData();

    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("social_auth_type", "normal");

    try {
      const response = await axios.post(
        "https://sandbox.practical.me/api/login",
        formData
      );
      if (response.data.isSuccess) {
        alert(`${response.data.message}`);
        const token = response.data.data.auth_token;

        dispatch(setToken(token));
        console.log("token", token);
        navigate("/");

        // redirect to home page
      } else {
        alert(`${response.data.message}`);
      }
    } catch (error) {
      alert("Login failed");
    }
  };

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleinputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => {
      return { ...prevInput, [name]: value };
    });
  };

  return (
    <div className="p-5 vh-100 main-div">
      <div className="container shadow p-3 bg-light d-flex flex-column border w-50">
        <ul className="nav nav-pills justify-content-center mb-3">
          <li className="nav-item"></li>
          <li className="nav-item"></li>
        </ul>

        <div className="tab-content">
          <div className={`tab-pane fade show active`}>
            <div class="d-flex p-2 justify-content-center">
              <h1>Login</h1>
            </div>

            <div className="mb-4">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={handleinputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleinputChange}
              />
            </div>

            <button
              className="btn btn-primary mb-4 w-100"
              onClick={handleLogin}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
