import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import  infoChart from "../../data.js";
const data = {
  labels: infoChart.muertos_tipo_dia.data.labels,
  datasets: [
    {
      label: infoChart.muertos_tipo_dia.titulo,
      backgroundColor: "#4f2b38",
      borderColor: "rgb(255, 99, 132)",
      data: infoChart.muertos_tipo_dia.data.valores,
    },
  ],
  
};


function MuertosDiurnoNocturno() {
  return (
    <Bar data={data} width={500} height={300}/>
  )
}

export default MuertosDiurnoNocturno