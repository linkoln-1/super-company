import React from "react";

interface ProgressBarProps {
  segments: {
    percentage: number;
    color: string;
    gradient: string;
    name: string;
  }[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ segments }) => {
  return (
    <div className="flex flex-col max-w-5xl mt-14 mb-14">
      <div className="flex w-11/12">
        {segments.map((segment, index) => (
          <div
            key={index}
            style={{
              width: `${segment.percentage}%`,
              height: "35px",
              background: `linear-gradient(90deg, ${segment.color}, ${segment.gradient})`,
              borderRadius:
                index === 0
                  ? "15px 0 0 15px"
                  : index === segments.length - 1
                  ? "0 15px 15px 0"
                  : "0",
            }}
            className="flex-shrink-0 animated-bar"
          ></div>
        ))}
      </div>
      <div className="mt-7">
        <hr />
      </div>
      <div className="flex mt-2 flex-wrap w-10/12 p-4">
        {segments.map((segment, index) => (
          <div
            className="bg-gray-100 p-2 rounded-full flex items-center space-x-3 mt-3 ml-2"
            key={index}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: segment.color }}
            ></span>
            <span className="font-bold text-sm text-[#7D83A1] ">
              {segment.percentage}%
            </span>
            <span className="text-[#7D83A1] text-sm">{segment.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
