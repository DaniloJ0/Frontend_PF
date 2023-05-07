import React from "react";
import Chart from "chart.js/auto";
import { Line} from "react-chartjs-2";
import  infoChart from "../data.js";

const data = {
  labels: infoChart.homeLine.labels,
  datasets: [
    {
      label: "Accidentes Vehiculares",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: infoChart.homeLine.data,
    },
  ],
};

function HomeChartLine() {
    return (
        <Line data={data} />
    )
}

export default HomeChartLine;
