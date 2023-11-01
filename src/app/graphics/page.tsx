"use client";
import React, { FC, useEffect, useState } from "react";
import LineChart from "@/components/Chart/LineChart";
import DoubleLineChart from "@/components/Chart/DoubleLine";
import RegionalDataChart from "@/components/Chart/RegionDataChart";
import {World} from "@/components/Chart/World";

interface ChartData {
  graphic1: Array<{
    labels: string[];
    data: number[];
  }>;
  graphic2: Array<{
    labels: string[];
    line1: {
      label: string;
      data: number[];
      fill: boolean;
    };
    line2: {
      label: string;
      data: number[];
      fill: boolean;
    };
  }>;
}

const GraphicPage: FC = () => {
  const [chartData, setChartData] = useState<ChartData>({
    graphic1: [{ labels: [], data: [] }],
    graphic2: [
      {
        labels: [],
        line1: {
          label: "",
          data: [],
          fill: false,
        },
        line2: {
          label: "",
          data: [],
          fill: false,
        },
      },
    ],
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setChartData(data))
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <>
      {chartData.graphic1?.map((el, index) => (
        <LineChart labels={el.labels} data={el.data} key={index} />
      ))}

      {chartData.graphic2?.map((el, index) => (
        <DoubleLineChart labels={el.labels} line1={el.line1} line2={el.line2}  key={index}/>
      ))}

      <RegionalDataChart />

      <World />
    </>
  );
};

export default GraphicPage;
