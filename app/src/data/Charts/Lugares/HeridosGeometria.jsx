import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import  infoChart from "../../data.js";
const data = {
  labels: infoChart.heridos_geometria_via.data.labels,
  datasets: [
    {
      label: infoChart.heridos_geometria_via.titulo,
      backgroundColor: "#e6a37a",
      borderColor: "rgb(255, 99, 132)",
      data: infoChart.heridos_geometria_via.data.valores,
    },
  ],
  
};


function HeridosGeometria() {
  return (
    <Bar data={data} width={500} height={300}/>
  )
}

export default HeridosGeometria