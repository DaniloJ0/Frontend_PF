import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import  infoChart from "../../data.js";
const data = {
  labels: infoChart.heridos_tipo_dia.data.labels,
  datasets: [
    {
      label: infoChart.heridos_tipo_dia.titulo,
      backgroundColor: "#79a687",
      borderColor: "rgb(255, 99, 132)",
      data: infoChart.heridos_tipo_dia.data.valores,
    },
  ],
  
};


function HeridosDiurnoNocturno() {
  return (
    <Bar data={data} width={500} height={300}/>
  )
}

export default HeridosDiurnoNocturno