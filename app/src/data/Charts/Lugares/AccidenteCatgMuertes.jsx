import React from 'react'
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import  infoChart from "../../data.js";
const data = {
  labels: infoChart.accidentes_categoria.data.labels,
  datasets: [
    {
      label: infoChart.accidentes_categoria.titulo,
      backgroundColor: ['#77477e', '#4c5e91', '#a82a53'],
      // borderColor: "#fff",
      data: infoChart.accidentes_categoria.data.valores,
    },
  ],
  
};


function AccidenteCatgMuertes() {
  return (
    <Pie data={data} width={300} height={300}/>
  )
}

export default AccidenteCatgMuertes