import React from 'react'
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import  infoChart from "../data.js";

const data = {
  labels: infoChart.vehiculos_accidentados_anio.data.labels,
  datasets: [
    {
      label: infoChart.vehiculos_accidentados_anio.titulo,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: infoChart.vehiculos_accidentados_anio.data.valores,
    },
  ],
};
function AccVehiculoYear() {
  return (
    <Line data={data} />
  )
}

export default AccVehiculoYear