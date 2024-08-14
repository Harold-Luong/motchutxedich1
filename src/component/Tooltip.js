import React from "react";
import "./tooltip.scss";

const Tooltip = (props) => {
 
  return (
    <div
      className="tooltip"
      style={{
        display: props.tooltipData.display,
        left: props.tooltipData.left +12+"px",
        top: props.tooltipData.top +7+"px",
      }}>
      {props.tooltipData.title}
    </div>
  );
};

export default Tooltip;
