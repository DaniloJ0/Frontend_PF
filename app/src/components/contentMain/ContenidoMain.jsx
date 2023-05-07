import React from "react";
import "./contenidoMain.css";
import SquadItem from "../squadItem/SquadItem";
import HomeChartLine from "../../data/Charts/HomeChartLine.jsx";
import HomeChatPie from "../../data/Charts/HomeChatPie";
import dataForItems from "../../data/amountItems.js";


function ContenidoMain() {
  return (
    <div className="container">
      <div className="row-squad">
        {
          dataForItems.map(item => {
            return <SquadItem data={item} />
          })
        }
      </div>
      <div className="row-graph">
        <div className="col-Graphs col3-4">
          <HomeChartLine />
        </div>
        <div className="col-Graphs col1-4">
          <HomeChatPie />
        </div>
      </div>
    </div>
  );
}

export default ContenidoMain;
