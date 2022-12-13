import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";

export default function Dashboard() {
  let navigate = useNavigate();
  useEffect(() => {}, []);
  const login = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      Home Page
      <Button style={{ float: "right" }} variant="contained" onClick={login}>
        Login
      </Button>
    </div>
  );
}
