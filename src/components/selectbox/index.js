import React from "react";
import { Select } from "antd";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Selectbox = ({options}) => {
  return <Select
    handleChange={handleChange}
    defaultValue={options[0].value}
    style={{ width: "80%" }}
    allowClear
    options={options}
  />
};

export default Selectbox;
