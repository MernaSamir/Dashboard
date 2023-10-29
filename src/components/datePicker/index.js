import React from 'react';
import { DatePicker } from 'antd';
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const DatePickerCom = () => (
    <DatePicker onChange={onChange} style={{width:'260px'}}/>

);
export default DatePickerCom;