import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import  infoChart from "../../data.js";

const data = {
  labels: infoChart.muertos_geometria_via.data.labels,
  datasets: [
    {
      label: infoChart.muertos_geometria_via.titulo,
      backgroundColor: "#d9c777",
      borderColor: "rgb(255, 99, 132)",
      data: infoChart.muertos_geometria_via.data.valores,
    },
  ],
  
};


function MuertosGeometria() {
  return (
    <Bar data={data} width={500} height={300}/>
  )
}

export default MuertosGeometria