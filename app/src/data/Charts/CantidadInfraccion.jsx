import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import infoChart from "../data.js";

const data = {
  labels: infoChart.cantidad_infracciones.data.labels,
  datasets: [
    {
      label: infoChart.cantidad_infracciones.titulo,
      backgroundColor: "rgb(155, 89, 182)",
      borderColor: "rgb(255, 99, 132)",
      data: infoChart.cantidad_infracciones.data.valores,
    },
  ],
};

function CantidadInfraccion() {
  return <Bar data={data} width={500} height={300}/>;
}

export default CantidadInfraccion;
