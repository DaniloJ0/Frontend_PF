import React from 'react'
import './sideBarList.css'
import graphIcon from "../../img/barra-grafica_16.png";
import infoIcon from "../../img/informacion_16.png";
import cityIcon from "../../img/ciudad_16.png";
import vehiculoIcon from "../../img/vehiculos_16.png";
import accidenteIcon from "../../img/accidente_16.png";
import sugerenciasIcon from "../../img/sugerencias_16.png";

function SideBarList() {
  return (
    <div className="sidebarList">  
        <ul>
            <li><a href="/"><img src={graphIcon} alt="" /> <span>Dashboard</span></a></li>
            <li><a href="/informacion#tipoAcc"><img src={accidenteIcon} alt="" /> <span>Por accidentes</span></a></li>
            <li><a href="/informacion#analisisAcc"><img src={vehiculoIcon} alt="" /> <span>Por vehículos </span></a></li>
            <li><a href="/otroslugares"><img src={cityIcon} alt="" /> <span>Otros lugares</span></a></li>
            {/* <li><a href="/sugerencias"><img src={sugerenciasIcon} alt="" /> <span>Sugerencias</span></a></li> */}
            <li><a href="/informacion/"><img src={infoIcon} alt="" /> <span>Resultados</span></a></li>
        </ul>
    </div>
  )
}

export default SideBarList