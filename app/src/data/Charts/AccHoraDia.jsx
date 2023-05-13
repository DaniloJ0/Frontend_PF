import React from 'react'
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import  infoChart from "../data.js";

const data = {
  labels: infoChart.accidentes_hora.data.labels,
  datasets: [
    {
      label: infoChart.accidentes_hora.titulo,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: infoChart.accidentes_hora.data.valores,
    },
  ],
};

function AccHoraDia() {
  return (
    <Line data={data} />
  )
}

export default AccHoraDia