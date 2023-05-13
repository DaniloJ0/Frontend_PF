import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import  infoChart from "../data.js";

const data = {
  labels: infoChart.accidentes_hora.data.labels,
  datasets: [
    {
      label: infoChart.accidentes_hora.titulo,
      backgroundColor: "rgb(148, 103, 189)",
      borderColor: "rgb(255, 99, 132)",
      data: infoChart.accidentes_hora.data.valores,
    },
  ],
  
};


function AccHoraDia() {
  return (
    <Bar data={data} width={500} height={300}/>
  )
}

export default AccHoraDia