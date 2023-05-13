import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import  infoChart from "../data.js";

const data = {
  labels: infoChart.infracciones_por_tipo.data.labels,
  datasets: [
    {
      label: infoChart.infracciones_por_tipo.titulo,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: "rgb(255, 99, 132)",
      data: infoChart.infracciones_por_tipo.data.valores,
    },
  ],
};

const options = {
  title: {
    display: true,
    text: "Ventas por mes",
    fontSize: 20,
  },
  legend: {
    display: true,
    position: "right",
  },
  scales: {
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

function InfraccionesTipo() {
  return (
    <Bar data={data} options={options}  width={500} height={300}/>
  )
}
//width={600} height={400}
export default InfraccionesTipo