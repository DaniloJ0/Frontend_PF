import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import  infoChart from "../data.js";

const data = {
  labels: infoChart.heridos_mes.data.labels,
  datasets: [
    {
      label: infoChart.heridos_mes.titulo,
      backgroundColor: "rgb(246, 176, 217)",
      borderColor: "rgb(255, 99, 132)",
      data: infoChart.heridos_mes.data.valores,
    },
  ],
};
function HeridosMes() {
  return (
    <Bar data={data} width={500} height={300}/>
  )
}

export default HeridosMes