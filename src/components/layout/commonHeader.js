import React, { useState } from "react";
import "./style.css";
import Profile from "../../assets/profile.svg";
import { Drawer, Button } from "antd";
import Sidebar from "../../components/sidebar";
import Menu from "../../assets/menu.svg";
import Right from '../../assets/chevron-right.svg'
const Header = ({ nodes }) => {
  console.log(nodes, "nnnn");
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="header">
      <div>
        <Button style={{border:"none"}} onClick={showDrawer}>
          <img src={Menu} alt="Navigation" />
        </Button>
        <Drawer
          title=""
          placement="left"
          // closable={true}
          onClose={onClose}
          open={visible}
        >
          <Sidebar nodes={nodes}></Sidebar>
        </Drawer>
        <p>Logo</p>
      </div>
      <div>
        <img src={Profile} alt="profile" />
        <img src={Right} alt="arrow" />

      </div>
    </div>
  );
};
export default Header;
