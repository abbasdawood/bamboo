import React from 'react';
import PropTypes from 'prop-types';
import style from './TableList.module.scss';
import invoicesData from '../../mockdata/invoices';

import { Table } from 'antd';

// TODO: This is to come from props
const columns = [
  {
    title: 'Invoice Number',
    dataIndex: 'Invoice Number',
  },
  {
    title: 'Status',
    dataIndex: 'Status',
  },
  {
    title: 'Amount',
    dataIndex: 'Amount',
  },
  {
    title: 'Funded by',
    dataIndex: 'Remitter'
  }
];

const TableList = props => {

  const pagination = {
    current: 1,
    pageSize: 10
  }

  const loading = false;

  return (
      <Table
        columns={columns}
        dataSource={invoicesData}
        pagination={pagination}
        loading={loading}
      />
  );
};

TableList.defaultProps = {

};

TableList.propTypes = {

};

export default TableList;