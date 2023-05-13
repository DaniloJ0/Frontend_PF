import React from 'react'
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import  infoChart from "../data.js";

const data = {
  labels: infoChart.infracciones_por_tipo.data.labels,
  datasets: [
    {
      label: infoChart.infracciones_por_tipo.titulo,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: infoChart.infracciones_por_tipo.data.valores,
    },
  ],
};
function InfraccionesTipo() {
  return (
    <Line data={data} />
  )
}

export default InfraccionesTipo