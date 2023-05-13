import React from 'react'
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import  infoChart from "../data.js";

const data = {
  labels: infoChart.muerto_tipo_accidente.data.labels,
  datasets: [
    {
      label: infoChart.muerto_tipo_accidente.titulo,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: infoChart.muerto_tipo_accidente.data.valores,
    },
  ],
};

function MuerteTipoAcc() {
  return (
    <Line data={data} />
  )
}

export default MuerteTipoAcc