import React from 'react'
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import  infoChart from "../data.js";

const data = {
  labels: infoChart.herido_tipo_accidente.data.labels,
  datasets: [
    {
      label: infoChart.herido_tipo_accidente.titulo,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: infoChart.herido_tipo_accidente.data.valores,
    },
  ],
};
function HeridosTipoAcc() {
  return (
    <Line data={data} />
  )
}

export default HeridosTipoAcc