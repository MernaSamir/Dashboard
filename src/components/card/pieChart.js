import React from 'react';
import { Pie } from '@ant-design/plots';

export default function PieChart() {
    const data = [
        {
          type: 'Operative',
          value: 60,
          color: '#FF5733', // Custom color

        },
        {
          type: 'Suspended EVSE',
          value: 15,
        },
        {
          type: 'Available',
          value: 15,
        },
        {
          type: 'Inoperative',
          value: 30,
        },
  
      ];
      const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
      
        label: {
          type: 'inner',
          offset: '-50%',
          content: '{value}',
          style: {
            textAlign: 'center',
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
        statistic: {
          title: false,
          content:{
            content:""
          }
        },
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

  return <Pie {...config} style={{height:"80%"}}/>;
}
