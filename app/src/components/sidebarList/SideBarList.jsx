import React from 'react'
import './sideBarList.css'
import graphIcon from "../../img/barra-grafica_16.png";
import userIcon from "../../img/usuario_16.png";
import infoIcon from "../../img/informacion_16.png";

function SideBarList() {
  return (
    <div className="sidebarList">  
        <ul>
            <li><a href="/"><img src={graphIcon} alt="" /> <span>Dashboard</span></a></li>
            <li><a href="/informacion/"><img src={infoIcon} alt="" /> <span>Información</span></a></li>
            <li><a href="/"><img src={userIcon} alt="" /> <span>Casos</span></a></li>
            <li><a href="/"><img src={graphIcon} alt="" /> <span>Vehiculos</span></a></li>
            <li><a href="/"><img src={userIcon} alt="" /> <span>Gravedad</span></a></li>
            <li><a href="/"><img src={infoIcon} alt="" /> <span>Sugerencias</span></a></li>
        </ul>
    </div>
  )
}

export default SideBarList