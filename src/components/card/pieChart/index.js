import React from "react";
import { Pie } from "@ant-design/plots";
import './style.css'
export default function PieChart() {
  const data = [
    {
      type: "Operative",
      value: 60,
    },
    {
      type: "Inoperative",
      value: 30,
    },

    {
      type: "Available",
      value: 15,
    },
    {
      type: "Suspended EVSE",
      value: 15,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,

    label: {
      type: "inner",
      offset: "-50%",
      content: "",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
   
    
    // interactions: [
    //   {
    //     type: 'element-selected',
    //   },
    //   {
    //     type: 'element-active',
    //   },
    // ],
    legend:false,
    statistic: {
      title: false,
      content: {
        content: "",
      },
    },
    autoFit: true,

    color: ["#11A1FD", "#FF9A32", "#0FEE9F", "#CECECE"],
    tooltip: {
      formatter: (datum) => {
        console.log(datum,"ddddddddddddddd")
        return { name: datum.type, value: datum.value + '%' };
      },
    },

    // Function

    // color: ({ type }) => {
    //   if(type === 'male'){
    //     return 'red';
    //   }
    //   return 'yellow';
    // },

    height: "80%", // Set the custom height here

    // statistic: {
    //   title: {
    //     custom: true,
    //     customContent: 'stations status',
    //   },
    //   content:{
    //     content:""
    //   }
    // }
  };

  return <div className="containerPie">
  <Pie {...config} style={{width:"40%" , height:"100%"}}  />
  <div className="custom-legend">
    <p>stations status</p>
    {data.map((entry, index) => (
      <div className="legend-item" key={entry.type}>
        <span className="legend-icon" style={{ backgroundColor: config.color[index] }}></span>
        <span className="legend-text">{entry.type}</span>
      </div>
    ))}
  </div>
</div>;
}
