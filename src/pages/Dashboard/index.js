import React from "react";

import Tickets from "../../widgets/tickets";
import Statistics from "../../widgets/statistics";
import "./style.css";
import ChargingTrends from "../../widgets/chargingTrends";
export default function Dashboard() {
  return (
    <div className="rightContent">
      <div className="topPart">
        <div className="dashHeader">
          <p>Dashboard</p>
          <p>Welcome to Dashboard</p>
        </div>
        <div>
          <div className="dashBody">
            <Statistics />
            <Tickets />
          </div>
        <ChargingTrends/>
        </div>
      </div>
    </div>
  );
}
