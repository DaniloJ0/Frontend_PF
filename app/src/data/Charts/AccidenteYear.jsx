import React from "react";
import Chart from "chart.js/auto";
import { Line} from "react-chartjs-2";
import  infoChart from "../data.js";

const data = {
  labels: infoChart.accidentes_anio.data.labels,
  datasets: [
    {
      label: infoChart.accidentes_anio.titulo,
      backgroundColor: "rgb(25, 99, 132)",
      borderColor: "rgb(25, 99, 132)",
      data: infoChart.accidentes_anio.data.valores,
    },
  ],
};

function AccidenteYear() {
    return (
        <Line data={data} />
    )
}

export default AccidenteYear;
