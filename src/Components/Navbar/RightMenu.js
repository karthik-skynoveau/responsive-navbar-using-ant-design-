import React from 'react';
import { Menu, Grid } from 'antd';
 
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const RightMenu = () => {
  const { md } = useBreakpoint();
  return (
      

    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="">
        <a href="">Home</a>
      </Menu.Item>
      <Menu.Item key="alipay">
        <a href="">Profile</a>
      </Menu.Item>
      <Menu.Item key="mail">
        
        <a href="">My Products</a>
      </Menu.Item>
      <Menu.Item key="app">
        <a href="">Sign Out</a>
      </Menu.Item>
      
    </Menu>
  );
}

export default RightMenu;
