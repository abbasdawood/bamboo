import React from 'react';
import PropTypes from 'prop-types';
import style from './PurchaseOrders.module.scss';
import { DetailHolder, PageMainHeader, SiderList } from '../../components';

import { Layout, Row, Col } from 'antd';

const PurchaseOrders = props => {
  return (
    <>
      <PageMainHeader stats={false}/>
      <Layout className={style['container']}>
        <Row>
          <Col span={6}>
            <SiderList/>
          </Col>
          <Col span={18}>
            <DetailHolder/>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

PurchaseOrders.defaultProps = {

};

PurchaseOrders.propTypes = {

};

export default PurchaseOrders;