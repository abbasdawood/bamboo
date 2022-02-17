import React from 'react';
import PropTypes from 'prop-types';
import style from './ContentContainer.module.scss';

import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import { Header } from '../../components';

const ContentContainer = props => {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
};

ContentContainer.defaultProps = {

};

ContentContainer.propTypes = {

};

export default ContentContainer;