import React from "react";
import Tooltip from "@/components/Chart/Tooltip/Tooltip";

interface PointProps {
  top: string;
  left: string;
  name: string;
  percentage: number;
  hex: string;
  color?: string;
  gradient?: string;
  size: number;
  index: number;
}

interface WorldMapProps {
  segments: {
    percentage: number;
    name: string;
    top: string;
    left: string;
    hex: string;
    color?: string;
    gradient?: string;
    size: number;
  }[];
}

const Point: React.FC<PointProps> = ({
  top,
  left,
  name,
  percentage,
  hex,
  size,
  index,
}) => {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    background: hex,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Tooltip as="div" content={`${name}: ${percentage}%`} top={top} left={left}>
      <div
        className={`xl:w-8 xl:h-8 w-10 h-10 -r pt-2 ${index === 0 ? "line" : ""}`}
        style={style}
      >
        <span className="text-sm text-white font-bold line-text">
          {index === 0 ? `${percentage}%` : ""}
        </span>
      </div>
    </Tooltip>
  );
};

const WorldMap: React.FC<WorldMapProps> = ({ segments }) => {
  return (
    <div className="h-screen xl:map-container map-container mx-auto">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 bg-opacity-5 z-0" />

      <div className="z-10">
        {segments.map((point, index) => (
          <Point key={index} {...point} index={index} />
        ))}
      </div>
    </div>
  );
};

export default WorldMap;
