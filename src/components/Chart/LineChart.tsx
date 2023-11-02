import React from "react";

import { Line } from "react-chartjs-2";

import {
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Chart,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
);

interface LineChartProps {
  labels: string[];
  data: number[];
}

const LineChart: React.FC<LineChartProps> = ({ labels, data }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Graphic 1",
        data,
        // backgroundColor: "rgba(173, 216, 230, 0.5)",
        borderColor: "#23C8FC",
        borderWidth: 3,
        pointBackgroundColor: "#23C8FC",
        pointBorderColor: "#23C8FC",
        pointRadius: [0, 5, 5, 0, 0],
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        max: 40,

        ticks: {
          stepSize: 10,
        },
      },
      x: {
        grid: {display: false}
      },
    },
  };

  return (
    <div style={{ width: "60%", height: "300px" }} className="mx-auto mt-9 bg-white rounded-lg pl-2 pt-2 shadow-2xl">
      <Line data={chartData} options={options} width={1220} height={400} />
    </div>
  );
};

export default LineChart;
