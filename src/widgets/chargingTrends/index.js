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
          <div className="date">
            <p>From</p>
            <DatePicker />
          </div>{" "}
          <div className="date">
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
          <Button className="apply">Apply</Button>
        </div>
        <div className="calcContainer">
          <div className="calcParent">
            <div className="calculations">
              <p>EGP8,239</p>
              <p>Total revenue on selected period</p>
            </div>
            <div className="calculations">
              <p>123</p>
              <p>Total sessions on selected period</p>
            </div>
          </div>
          <div className="actions">
            {" "}
            <Selectbox options={[{ value: "export", label: "Export" }]} />
          </div>
        </div>
        <ChargingSession
          data={[
            {
              x: "Monday, 16 Nov",
              y: 27,
            },
            {
              x: "Tuesday, 17 Nov",
              y: 47,
            },
            {
              x: "Wednesday, 18 Nov",
              y: 42,
            },
            {
              x: "Thursday, 19 Nov",
              y: 10,
            },
            {
              x: "Friday, 20 Nov",
              y: 52,
            },
            {
              x: "Saturday, 21 Nov",
              y: 37,
            },
            {
              x: "Sunday, 22 Nov",
              y: 37,
            },
          ]}
          color="#0DA5D8"
          yAxisTitle='Num of Sessions'
        />
      </div>
    </div>
  );
}
