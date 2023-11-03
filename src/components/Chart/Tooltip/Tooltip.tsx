import React, { useState, ReactNode } from "react";

interface TooltipProps {
  content: string;
  children: ReactNode;
  className?: string;
  as?: "div" | "span";
  top: string;
  left: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  className = "",
  as = "div",
  top,
  left,
}) => {
  const [visible, setVisible] = useState(false);

  const Wrapper = as;

  return (
    <Wrapper
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      style={{
        position: "absolute",
        top: `${top}`,
        left: `${left}`,
      }}
    >
      {visible && (
        <div
          className="z-10 p-2 bg-white border border-gray-300 rounded-full shadow-lg xl:w-44 text-center"
          style={{
            position: "absolute",
            top: "5px"
          }}
        >
          {content}
        </div>
      )}
      {children}
    </Wrapper>
  );
};

export default Tooltip;
