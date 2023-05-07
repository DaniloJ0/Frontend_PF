import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./contenidoMain.css";
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
        <div className="col col1">Columna 1</div>
        <div className="col col2">Columna 2</div>
        <div className="col col3">Columna 3</div>
        <div className="col col4">Columna 4</div>
      </div>
      <div className="row-graph">
        <div className="col col3-4">
            <Line data={data} />
        </div>
        <div className="col col1-4">Columna 1-4</div>
      </div>
    </div>
  );
}

export default ContenidoMain;
