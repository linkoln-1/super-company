import React from "react";

import { Line } from "react-chartjs-2";

interface LineData {
  data: number[];
  label: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  pointBackgroundColor?: string;
  pointBorderColor?: string;
  pointRadius?: number[];
}

interface DoubleLineChartProps {
  labels: string[];
  line1: LineData;
  line2: LineData;
}

const DoubleLineChart: React.FC<DoubleLineChartProps> = ({
  labels,
  line1,
  line2,
}) => {
  const data = {
    labels: labels,
    datasets: [
      {
        ...line1,
        backgroundColor: "rgba(173, 216, 230, 0.5)",
        borderColor: "#23C8FC",
        borderWidth: 2,
        pointBackgroundColor: "#23C8FC",
        pointBorderColor: "#23C8FC",
        pointRadius: [0, 0, 5, 0, 0],
      },
      {
        ...line2,
        backgroundColor: "rgba(255, 165, 0, 0.5)",
        borderColor: "#FFA500",
        borderWidth: 2,
        pointBackgroundColor: "#FFA500",
        pointBorderColor: "#FFA500",
        pointRadius: [0, 0, 5, 0, 0],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 4,
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
    <div style={{ width: "80vw", height: "40vh" }} className="mx-auto mt-9 bg-white rounded-lg pl-2 pt-2 shadow-2xl">
      <Line data={data} options={options} />
    </div>
  );
};

export default DoubleLineChart;
