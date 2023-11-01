import React from "react";
import Tooltip from "@/components/Chart/Tooltip/Tooltip";

interface PointProps {
  top: string;
  left: string;
  name: string;
  percentage: number;
  color: string;
  gradient: string;
}

interface WorldMapProps {
  segments: {
    percentage: number;
    color: string;
    gradient: string;
    name: string;
    top: string;
    left: string;
  }[];
}

const Point: React.FC<PointProps> = ({
  top,
  left,
  name,
  percentage,
  color,
  gradient,
}) => {
  return (
    <Tooltip as="div" content={`${name}: ${percentage}%`} top={top} left={left}>
      <div
        className="w-10 h-10 bg-gradient-to-r text-center pt-2"
        style={{
          background: `linear-gradient(to right, ${color}, ${gradient})`,
          borderRadius: "50%",
        }}
      >
        <span className="text-sm">{percentage}%</span>
      </div>
    </Tooltip>
  );
};

const WorldMap: React.FC<WorldMapProps> = ({ segments }) => {
  return (
    <div className="relative max-w-3xl h-screen bg-[#ccc] map-container mx-auto rounded-full">
      {segments.map((point, index) => (
        <Point key={index} {...point} />
      ))}
    </div>
  );
};

export default WorldMap;
