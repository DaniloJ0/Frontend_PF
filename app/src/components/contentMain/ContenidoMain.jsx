import React from "react";
import "./contenidoMain.css";
import SquadItem from "../squadItem/SquadItem";
import AccidenteYear from "../../data/Charts/AccidenteYear.jsx";
import AccHoraDia from "../../data/Charts/AccHoraDia.jsx";
import AccVehiculoYear from "../../data/Charts/AccVehiculoYear.jsx";
import AccTipoVehiculo from "../../data/Charts/AccTipoVehiculo.jsx";
import HeridosTipoAcc from "../../data/Charts/HeridosTipoAcc.jsx";
import InfraccionesTipo from "../../data/Charts/InfraccionesTipo.jsx";
import MuerteTipoAcc from "../../data/Charts/MuerteTipoAcc.jsx";
import dataForItems from "../../data/amountItems.js";

function ContenidoMain() {
  return (
    <div className="container">
      <div className="row-squad">
        {dataForItems.map((item) => {
          return <SquadItem data={item} />;
        })}
      </div>
      <div className="row-graph">
        <div className="col-Graphs col3-4-1">
          <AccidenteYear />
        </div>
        <div className="col-Graphs col3-4">
          <AccHoraDia />
        </div>
        <div className="col-Graphs col3-4">
          <AccTipoVehiculo />
        </div>
        <div className="col-Graphs col3-4">
          <AccVehiculoYear />
        </div>
        <div className="col-Graphs col3-4">
          <HeridosTipoAcc />
        </div>
        <div className="col-Graphs col3-4">
          <InfraccionesTipo />
        </div>
        <div className="col-Graphs col3-4">
          <MuerteTipoAcc />
        </div>
      </div>
    </div>
  );
}

export default ContenidoMain;
