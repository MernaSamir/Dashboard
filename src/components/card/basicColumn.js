import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

export default function ChargingSession ({data, color}) {

  const config = {
    data,
    xField: 'x',
    yField: 'y',
    
    label: {
      position: 'middle',

      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    minColumnWidth: 30,
    maxColumnWidth: 30,
    xAxis: {
      title: {
        text: '',
      },
    },
    yAxis: {
      title: {
        text: 'Num of Sessions',
      },
    
    },
    color:color

  };
  return <Column {...config} style={{height:"80%"}}/>;
};