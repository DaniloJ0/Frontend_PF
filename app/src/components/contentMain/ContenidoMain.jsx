import React from "react";
import { Link } from "react-router-dom";
import "./contenidoMain.css";
import SquadItem from "../squadItem/SquadItem";
import AccidenteYear from "../../data/Charts/AccidenteYear.jsx";
import AccHoraDia from "../../data/Charts/AccHoraDia.jsx";
import AccTipoVehiculo from "../../data/Charts/AccTipoVehiculo.jsx";
import HeridosTipoAcc from "../../data/Charts/HeridosTipoAcc.jsx";
import InfraccionesTipo from "../../data/Charts/InfraccionesTipo.jsx";
import MuerteTipoAcc from "../../data/Charts/MuerteTipoAcc.jsx";
import dataForItems from "../../data/amountItems.js";
import CantidadInfraccion from "../../data/Charts/CantidadInfraccion";
import AccDiurnoNocturno from "../../data/Charts/Lugares/AccDiurnoNocturno";
import HeridosYear from "../../data/Charts/HeridosYear";
import HeridosMes from "../../data/Charts/HeridosMes";
import AccidenteCatgMuertes from "../../data/Charts/Lugares/AccidenteCatgMuertes";
import HeridosDiurnoNocturno from "../../data/Charts/Lugares/HeridosDiurnoNocturno";
import HeridosTerreno from "../../data/Charts/Lugares/HeridosTerreno";
import HeridosGeometria from "../../data/Charts/Lugares/HeridosGeometria";
import MuertosDiurnoNocturno from "../../data/Charts/Lugares/MuertosDiurnoNocturno";
import PromHeridosMeteorologico from "../../data/Charts/Lugares/PromHeridosMeteorologico";

function ContenidoMain() {
  return (
    <div className="container">
      <div className="row-squad">
        {dataForItems.bloque_1.map((item) => {
          return <SquadItem data={item} />;
        })}
      </div>
      <div className="row-graph">
        <div className="col-Graphs col-1">
          <Link to="/informacion#">
            <AccidenteYear />
          </Link>
        </div>
        <div className="col-Graphs col-2">
          <Link to="/informacion#AccHoraDia">
            <AccHoraDia />
          </Link>
        </div>
        <div className="col-5">
          {dataForItems.bloque_2.map((item) => {
            return <SquadItem data={item} />;
          })}
        </div>
        <div className="col-Graphs col-3">
          <Link to="/informacion#accTipoVehiculo">
            <AccTipoVehiculo />
          </Link>
        </div>
        <div className="col-Graphs col-4">
          <Link to="/informacion#heridosTipoAcc">
            <HeridosTipoAcc />
          </Link>
        </div>

        <div className="col-Graphs col-6">
          <Link to="/informacion#infraccionesTipo">
            <InfraccionesTipo />
          </Link>
        </div>
        <div className="col-Graphs col-7">
          <Link to="/informacion#muerteTipoAcc">
            <MuerteTipoAcc />
          </Link>
        </div>
        <div className="col-Graphs col-">
          <Link to="/informacion#cantidadInfraccion">
            <CantidadInfraccion />
          </Link>
        </div>
        <div className="col-Graphs col-">
          <Link to="/informacion#AccDiurnoNocturno">
            <AccDiurnoNocturno />
          </Link>
        </div>
        <div className="col-Graphs col-7">
          <Link to="/informacion#HeridosYear">
            <HeridosYear />
          </Link>
        </div>
        <div className="col-Graphs col-7">
          <Link to="/informacion#HeridosMes">
            <HeridosMes />
          </Link>
        </div>
        <div className="col-Graphs col-">
          <Link to="/informacion#AccDiurnoNocturno">
            <AccDiurnoNocturno />
          </Link>
        </div>
        <div className="col-Graphs col-7">
          <Link to="/otroslugares#AccidenteCatgMuertes">
            <AccidenteCatgMuertes />
          </Link>
        </div>
        <div className="col-Graphs col-">
          <Link to="/otroslugares#HeridosTerreno">
            <HeridosTerreno />
          </Link>
        </div>
        <div className="col-Graphs col-7">
          <Link to="/otroslugares#HeridosGeometria">
            <HeridosGeometria />
          </Link>
        </div>
        <div className="col-Graphs col-">
          <Link to="/otroslugares#MuertosDiurnoNocturno">
            <MuertosDiurnoNocturno />
          </Link>
        </div>
        <div className="col-Graphs col-7">
          <Link to="/otroslugares#HeridosDiurnoNocturno">
            <HeridosDiurnoNocturno />
          </Link>
        </div>
        <div className="col-Graphs col-7">
          <Link to="/otroslugares#PromHeridosMeteorologico">
            <PromHeridosMeteorologico/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContenidoMain;
