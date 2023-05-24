import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import  infoChart from "../data.js";

const data = {
  labels: infoChart.heridos_year.data.labels,
  datasets: [
    {
      label: infoChart.heridos_year.titulo,
      backgroundColor: "rgb(214, 120, 0)",
      borderColor: "rgb(255, 99, 132)",
      data: infoChart.heridos_year.data.valores,
    },
  ],
};
function HeridosYear() {
  return (
    <Bar data={data} width={500} height={300}/>
  )
}

export default HeridosYear