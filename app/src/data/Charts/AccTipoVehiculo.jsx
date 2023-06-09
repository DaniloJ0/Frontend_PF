import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import infoChart from "../data.js";

const data = {
  labels: infoChart.accidentes_tipo_vehiculo.data.labels,
  datasets: [
    {
      label: infoChart.accidentes_tipo_vehiculo.titulo,
      backgroundColor: "rgb(22, 160, 133)",
      borderColor: "rgb(255, 99, 132)",
      data: infoChart.accidentes_tipo_vehiculo.data.valores,
    },
  ],
};

function AccTipoVehiculo() {
  return <Bar data={data} width={500} height={300}/>;
}

export default AccTipoVehiculo;
