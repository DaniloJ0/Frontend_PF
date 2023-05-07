import React from "react";
import "./sideBar.css";
import imagen from "../../img/accidente-de-coche_128.png";
import SideBarList from "../sidebarList/SideBarList.jsx";

//rfce

function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img className="imgLogo" src={imagen} alt="" />
        <p>Analitica de Accidentes</p>
      </div>
      <SideBarList />
    </div>
  );
}

export default SideBar;
