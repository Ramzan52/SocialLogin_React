import React, { useEffect } from "react";
import Login from "./screens/Login";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { app } from "./firebase-config";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import "./Style.scss";
import Dashboard from "./screens/Dashboard";
import Home from "./screens/Home";

function App() {
  let navigate = useNavigate();

  // useEffect(() => {
  //   let authToken = localStorage.getItem("Auth Token");

  //   if (authToken) {
  //     navigate("/home");
  //   }
  // }, []);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/home" element={<Home />}></Route>

        <Route path="/login" element={<Login title="Login" />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
