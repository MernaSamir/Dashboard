import React from "react";
import "./style.css";
import Selectbox from "../../components/selectbox";
import DatePicker from "../../components/datePicker";
import { Button } from "antd";
import ChargingSession from "../../components/card/basicColumn";

export default function ChargingTrends() {
  return (
    <div className="chargingTrends">
      <p className="chargingHeader">Charging Trends</p>
      <div className="chargingContainer">
        <div className="time">
          <div>
            <p className="head">Timeframe</p>
            <Selectbox options={[{ value: "today", label: "Today" }]} />
          </div>
          <div>
            <p>From</p>
            <DatePicker />
          </div>{" "}
          <div>
            <p>To</p>
            <DatePicker />
          </div>
        </div>
        <div className="time">
          <div>
            <p className="head">Report</p>
            <Selectbox
              options={[{ value: "session", label: "Session only" }]}
            />
          </div>
          <Button className="apply" >Apply</Button>
        </div>
        <div className="calcContainer">
        <div className="calculations">
        <p>EGP8,239</p>
        <p>Total revenue on selected period</p>
        </div>
        <div className="calculations">
        <p>123</p>
        <p>Total sessions on selected period</p>
        </div>
        </div>
        <ChargingSession data ={[
    {
      x: 'Monday',
      y: 27,
    },
    {
      x: 'Tuesday',
      y: 47,
    },
    {
      x: 'Wednesday',
      y: 42,
    },
    {
      x: 'Thursday',
      y: 10,
    },
    {
      x: 'Friday',
      y: 52,
    },
    {
      x: 'Saturday',
      y: 37,
    },
    {
      x: 'Sunday',
      y: 37,
    },
   
  ]} color="#0DA5D8"/>
      </div>
    </div>
  );
}
