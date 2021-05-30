import React from 'react';
import { Menu, Grid } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint()
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="mail" id="Leftone">
        <a href="">Home</a>
      </Menu.Item>
      
      <Menu.Item key="alipay" id="Leftone">
        <a href="">Profile</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
