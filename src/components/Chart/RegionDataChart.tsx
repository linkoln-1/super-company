"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { icons } from "@/mock/data";

import ProgressBar from "@/components/Chart/GradientLineChart/ProgressBar";
import { Icon } from "@/components/Chart/GradientLineChart/Icon";

import "./style.css";

interface RegionalDataChartProps {
  percentage: number;
  color: string;
  gradient: string;
  name: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const RegionalDataChart = () => {
  const { data, error } = useSWR("/api/segments", fetcher, {
    refreshInterval: 5 * 60 * 1000,
  });

  const [segments, setSegments] = useState([]);

  useEffect(() => {
    if (data && !error) {
      let normalizedSegments = normalizeData(data);
      setSegments(normalizedSegments);
    } else if (error) {
      console.error("Error fetching data:", error);
    }
  }, [data, error]);

  const normalizeData = (data: any) => {
    return data.map((segment: any) => ({
      name: segment.name,
      percentage: segment.percentage,
      color: segment.color,
      gradient: segment.gradient,
    }));
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="cards-container">
        <div className="card">
          <div className="card-icon">
            <Icon icon={icons[0]?.icon} />
          </div>
          <p className="card-text-small">Top region</p>
          <p className="card-text-large">United State</p>
        </div>

        <div className="card">
          <div className="card-icon">
            <Icon icon={icons[1]?.icon} />
          </div>
          <p className="card-text-small">Top gender</p>
          <p className="card-text-large">
            Male
            {segments.map((el: RegionalDataChartProps, index) => (
              <span key={index} className="ml-4">
                {index === 0 ? `${el.percentage}%` : ""}
              </span>
            ))}
          </p>
        </div>

        <div className="card">
          <div className="card-icon">
            <Icon icon={icons[2]?.icon} />
          </div>
          <p className="card-text-small">Top age</p>
          <p className="card-text-large">
            20-28
            {segments.map((el: RegionalDataChartProps, index) => (
              <span key={index} className="ml-4">
                {index === 0 ? `${el.percentage}%` : ""}
              </span>
            ))}
          </p>
        </div>
      </div>

      <ProgressBar segments={segments} />
    </div>
  );
};

export default RegionalDataChart;
