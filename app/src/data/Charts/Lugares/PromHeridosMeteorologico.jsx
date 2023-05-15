import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import  infoChart from "../../data.js";

const data = {
  labels: infoChart.promedio_heridos_meteorologia.data.labels,
  datasets: [
    {
      label: infoChart.promedio_heridos_meteorologia.titulo,
      backgroundColor: "#036564",
      borderColor: "rgb(255, 99, 132)",
      data: infoChart.promedio_heridos_meteorologia.data.valores,
    },
  ],
  
};


function PromHeridosMeteorologico() {
  return (
    <Bar data={data} width={500} height={300}/>
  )
}

export default PromHeridosMeteorologico