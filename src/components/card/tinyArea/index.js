import React from "react";
import { TinyArea } from "@ant-design/plots";
import "./style.css";
const TinyAreaChart = ({ today, month, className, noSubHeader, infoClass, infoContClass }) => {
  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513,
    546, 983, 340, 539, 243, 226, 192,
  ];
  const config = {
    height: 40,
    autoFit: false,
    data,
    smooth: true,
    areaStyle: {
      fill: "#0FEE9F1A",
    },
  };
  return (
    <div className="afterHeader">
      <div className={infoContClass}>
        <div className={infoClass?infoClass: "info"}>
          <p className="infoLeft">Today</p>
          <div>
            <p className={className}>{today || "3,821 EGP"}</p>
            {!noSubHeader && (
              <p>
                <span>+2.3%</span>
                <span>from yesterday</span>
              </p>
            )}
          </div>
        </div>
        <div className={infoClass || "info"}>
          <p className="infoLeft">This Month</p>
          <div>
            <p className={className}>{month || "28,239 EGP"}</p>
            {!noSubHeader && (
              <p>
                <span>+1.3% </span>
                <span>from last month%</span>
              </p>
            )}
          </div>
        </div>
      </div>
      <TinyArea {...config} className="tinyArea"  />
    </div>
  );
};
export default TinyAreaChart;
