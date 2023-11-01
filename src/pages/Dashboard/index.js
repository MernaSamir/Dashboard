import React from "react";

import Tickets from "../../widgets/tickets";
import Statistics from "../../widgets/statistics";
import "./style.css";
import ChargingTrends from "../../widgets/chargingTrends";
import Update from '../../assets/update.svg'
export default function Dashboard() {
  return (
    <div className="rightContent">
      <div className="topPart">
        <div className="dashHeader">
          <p>Dashboard</p>
          <p>Welcome to Dashboard</p>
        </div>
        <div className="updateContainer">
          <div>
            <img src={Update} alt="last update"/>
            <p>Last update: </p> <p>8 Aug 2021, 7:30PM</p></div>
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
