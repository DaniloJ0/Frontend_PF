import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import  infoChart from "../../data.js";
const data = {
  labels: infoChart.acc_diurno_nocturno.data.labels,
  datasets: [
    {
      label: infoChart.acc_diurno_nocturno.titulo,
      backgroundColor: "#79a687",
      borderColor: "rgb(255, 99, 132)",
      data: infoChart.acc_diurno_nocturno.data.valores,
    },
  ],
  
};

function AccDiurnoNocturno() {
  return (
    <Bar data={data} width={500} height={300}/>
  )
}

export default AccDiurnoNocturno