import React, { ReactNode } from "react";

interface GradientButtonProps {
  classNameButton?: string;
  classNameSpan?: string;
  alignment?: "left" | "center" | "right";
  children: ReactNode;
  width?: string | number;
  onClick?: () => void
}

export const GradientButton = ({
  classNameButton,
  classNameSpan,
  alignment,
  children,
  width,
  onClick
}: GradientButtonProps) => {
  let alignmentClass = "";
  switch (alignment) {
    case "center":
      alignmentClass = "m-auto";
      break;
    case "right":
      alignmentClass = "ml-auto";
      break;
    case "left":
    default:
      alignmentClass = "mr-auto";
      break;
  }

  const style = {
    width: typeof width === 'number' ? `${width}px` : width
  };

  return (
      <div className={alignmentClass} style={{width:""}}>
        <button className={`${classNameButton}`} style={style} onClick={onClick}>
          <span className={classNameSpan}>{children}</span>
        </button>
      </div>
  );
};
