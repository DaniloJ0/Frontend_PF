import React from 'react'
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import  infoChart from "../data.js";

const data = {
  labels: infoChart.accidentes_tipo_vehiculo.data.labels,
  datasets: [
    {
      label: infoChart.accidentes_tipo_vehiculo.titulo,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: infoChart.accidentes_tipo_vehiculo.data.valores,
    },
  ],
};

function AccTipoVehiculo() {
  return (
    <Line data={data} />
  )
}

export default AccTipoVehiculo