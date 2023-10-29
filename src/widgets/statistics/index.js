import { map } from "lodash";
import React from "react";
import PieChart from "../../components/card/pieChart";
import TinyAreaChart from "../../components/card/tinyArea";
import ChargingSession from "../../components/card/basicColumn";
import Card from "../../components/card";
import Stations from "../../assets/stations.svg";
import Charging from "../../assets/charging.svg";
import Energy from "../../assets/energy.svg";
import ChargingS from "../../assets/chargingSession.svg";
import Users from "../../assets/users.svg";
import './style.css'
export default function Statistics() {
  const upCards = [
    { name: "Stations", icon: Stations, comp: <PieChart /> },
    { name: "Charging Revenue", icon: Charging, comp: <TinyAreaChart /> },
  ];
  const downCards = [
    {
      name: "Energy Consumption",
      icon: Energy,
      comp: (
        <TinyAreaChart
          Today="1,621 kWh"
          month="1,210,619 kWh"
          className="energy"
        />
      ),
    },

    {
      name: "Charging Sessions",
      icon: ChargingS,
      comp: (
        <ChargingSession
          data={[
            {
              x: "Week1",
              y: "2k",
            },
            {
              x: "Week2",
              y: "4k",
            },
            {
              x: "Week3",
              y: "5k",
            },
            {
              x: "Week4",
              y: "4k",
            },
          ]}
          color="#FF9A32"
        />
      ),
    },
    {
      name: "Users",
      icon: Users,
      comp: (
        <TinyAreaChart
          today="14 Users"
          month="1,100 Users"
          noSubHeader={true}
          infoClass="userInfo"
          infoContClass="infosContainer"
          // className="energy"
        />
      ),
    
      
    },
    

  ];
  return (
    <div className="leftCards">
      <div className="upCards">
        {map(upCards, (ele, index) => (
          <Card ele={ele} key={index} />
        ))}
      </div>
      <div className="downCards">
        {map(downCards, (ele, index) => (
          <Card ele={ele} key={index} />
        ))}
      </div>
    </div>
  );
}
