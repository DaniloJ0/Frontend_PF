import React from "react";
import Chart from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";
import "./contenidoMain.css";
import SquadItem from "../squadItem/SquadItem";
const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};
// {/* <Line data={data} /> */}

function ContenidoMain() {
  return (
    <div className="container">
      <div className="row-squad">
        <SquadItem />
        <SquadItem />
        <SquadItem />
        <SquadItem />
      </div>
      <div className="row-graph">
        <div className="col-Graphs col3-4">
          <Line data={data} />
        </div>
        <div className="col-Graphs col1-4">
        <Bar data={data} />
        </div>
      </div>
    </div>
  );
}

export default ContenidoMain;
