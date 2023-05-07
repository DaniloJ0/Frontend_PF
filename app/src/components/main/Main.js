import React from "react";
import "./main.css";
import Navbar from "../navbar/Navbar";

function Main() {
  return (
    <div className="main">
      <h1>Dashboard</h1>
        <Navbar/>
      <div className="content">
        <p>Main content</p>
      </div>
    </div>
  );
}

export default Main;
