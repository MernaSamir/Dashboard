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
import "./style.css";
export default function Statistics() {
  const upCards = [
    {
      name: "Stations",
      icon: Stations,
      besideHeader: (
        <>
          <p>
            <span>348</span>
            <span>Properties</span>
          </p>
          <p>
            <span>1.318</span>
            <span>Charging Stations</span>
          </p>
          <p>
            <span>2700</span>
            <span>Connectors (1500 AC - 1200 DC )</span>
          </p>
        </>
      ),
      comp: <PieChart />,
    },
    {
      name: "Charging Revenue",
      icon: Charging,
      comp: <TinyAreaChart fill="#0FEE9F1A" />,
    },
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
          fill="#d6e3fd"
        />
      ),
    },

    {
      name: "Charging Sessions",
      icon: ChargingS,
      comp: (
        <div className="sessionsCont">
          <div className="sessionsInfo">
            <p>7,221 Sessions</p>

            <p className="infoLeft">This month</p>
          </div>
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
          height="60%"
          />
        </div>
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
          fill="#d6e3fd"
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
