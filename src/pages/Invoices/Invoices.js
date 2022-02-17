import React from 'react';
import PropTypes from 'prop-types';
import style from './Invoices.module.scss';

import { Link } from 'react-router-dom';
import { DetailHolder, PageMainHeader, Previewer, TableList } from '../../components';

import { Layout, Row, Col } from 'antd';


const Invoices = props => {
  return (
    <>
      <PageMainHeader />
      <Layout className={style['content-container']}>
        <Row>
          <Col span={24}>
            <TableList />
          </Col>
          <Col>
          <Previewer></Previewer>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

Invoices.defaultProps = {

};

Invoices.propTypes = {

};

export default Invoices;