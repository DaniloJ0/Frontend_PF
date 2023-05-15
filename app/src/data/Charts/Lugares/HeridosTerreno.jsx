import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import  infoChart from "../../data.js";
const data = {
  labels: infoChart.heridos_terreno.data.labels,
  datasets: [
    {
      label: infoChart.heridos_terreno.titulo,
      backgroundColor: "rgb(148, 103, 189)",
      borderColor: "rgb(255, 99, 132)",
      data: infoChart.heridos_terreno.data.valores,
    },
  ],
  
};


function HeridosTerreno() {
  return (
    <Bar data={data} width={500} height={300}/>
  )
}

export default HeridosTerreno