import React from "react";
import "./main.css";
// import Navbar from "../navbar/Navbar";
import ContenidoMain from "../contentMain/ContenidoMain";

function Main() {
  return (
    <div className="main">
      <h1>Dashboard</h1>
      {/* <Navbar/> */}
      <hr className="lineMain"></hr>
      <p>Hola, Bienvenido de nuevo</p>
      <div className="content">
        <ContenidoMain />
      </div>
    </div>
  );
}

export default Main;
