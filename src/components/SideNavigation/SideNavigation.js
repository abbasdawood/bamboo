import React from 'react';
import PropTypes from 'prop-types';
import style from './SideNavigation.module.scss';

import { Link, useResolvedPath, useMatch } from 'react-router-dom';

import { Layout, Menu } from 'antd';

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideNavigation = props => {

  // TODO: Add code to open the correct sub menu and highlight the subpath based on location / route

  // let resolved = useResolvedPath(to);
  // let match = useMatch({path: resolved.pathname, end: true});

  const onCollapse = (collapsed, type) => {
    console.log(collapsed, type);
  };

  const collapsed = false;

  return (
    <Sider onCollapse={onCollapse}
      breakpoint="md"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
    >
      <div className={style.logo} />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="/app/dashboard" icon={<PieChartOutlined />}>
          <Link to="/app/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to="/app/purchase-orders">Purchase Orders</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Dispatches">
          <Menu.Item key="3">Ongoing</Menu.Item>
          <Menu.Item key="4">Past</Menu.Item>
        </SubMenu>
        <SubMenu key="/app/finance" icon={<TeamOutlined />} title="Finance">
          <Menu.Item key="/app/finance/invoices">
            <Link to="/app/finance/invoices">Invoices</Link>
          </Menu.Item>
          <Menu.Item key="">Payments</Menu.Item>
          <Menu.Item key="8">Advances</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Reports
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

SideNavigation.defaultProps = {

};

SideNavigation.propTypes = {

};

export default SideNavigation;