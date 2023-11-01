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
    scales: {
      y: {
        max: 40,

        ticks: {
          stepSize: 10,
        },
      },
      x: {
        title: {
          color: "red",
          display: true,
          text: "Graphic-2",
        },
      },
    },
  };
  return (
    <div style={{ width: "560px", height: "300px", marginTop: "30px" }}>
      <Line data={data} width={560} height={300} options={options} />
    </div>
  );
};

export default DoubleLineChart;
