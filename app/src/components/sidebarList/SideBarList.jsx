import React from 'react'
import './sideBarList.css'
import graphIcon from "../../img/barra-grafica_16.png";
function SideBarList() {
  return (
    <div className="sidebarList">  
        <ul>
            <li><a href="#"><img src={graphIcon} alt="" /> <span>Dashboard</span></a></li>
            <li><a href="#">* <span>Dashboard</span></a></li>
            <li><a href="#">* <span>Dashboard</span></a></li>
        </ul>
    </div>
  )
}

export default SideBarList