import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './DetailHolder.module.scss';

import { Typography, Row, Col, Layout, PageHeader, Dropdown, Menu, Avatar, Tooltip, Table, Space, Card, Form, Input, Button, DatePicker, Select, Rate, InputNumber, AutoComplete, Statistic } from 'antd';

import { EditOutlined, InboxOutlined } from '@ant-design/icons';
import Search from 'antd/lib/transfer/search';
import Dragger from 'antd/lib/upload/Dragger';

const { Title, Text } = Typography;
const { Option } = Select;

const menu = (
  <Menu>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

const handleMenuClick = () => {
  console.log('Do something');
}

const columns = [{
  title: 'Product Details',
  dataIndex: 'productDetails',
  key: 'productDetails',
  render: product => (<>
    <Space direction='vertical' align='start' size={0}>
      <Title level={5}>
        {product.name}
      </Title>
      <Text>{product.code}</Text>
      <Text>{product.packSize} {product.unitOfMeasurement} / Pack</Text>
    </Space>
  </>)
}, {
  title: 'Rate & Tax',
  dataIndex: 'priceDetails',
  key: 'priceDetails',
  align: 'right',
  render: price => (<>
    <Space direction='vertical' size={0} align='end'>
      <Title level={5}>
        {price.unitPrice}
      </Title>
      <Text>{price.taxPercentage}</Text>
      <Text>..</Text>
    </Space>
  </>)
}, {
  title: 'Quantity',
  dataIndex: 'quantity',
  key: 'quantity',
  align: 'right',
  render: quantity => (<>
    <Space direction='vertical' size={0} align='end'>
      <Title level={5}>
        {quantity.totalQuantity}
      </Title>
      <Text>{quantity.fulfilled}</Text>
      <Text>..</Text>
    </Space>
  </>)
}, {
  title: 'Amount',
  dataIndex: 'amount',
  key: 'amount',
  align: 'right',
  render: amount => (<>
    <Space direction='vertical' size={0} align='end'>
      <Title level={5}>
        {amount.totalAmount}
      </Title>
      <Text>{amount.fulfilled}</Text>
      <Avatar.Group
        maxCount={2}
        maxPopoverTrigger="hover"
        size={18}
        maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
      >
        {/* {vendors.map((row, i) => { */}
        <Tooltip title='Shree' placement="top" size={18}>
          <Avatar src='https://joeschmoe.io/api/v1/random' />
        </Tooltip>
        {/* })} */}
      </Avatar.Group>
    </Space>
  </>)
}]

const buyerName = "Suumaya Agro Foods Pvt. Ltd.";

const data = [
  {
    productDetails: {
      name: 'Milk GA pass Bucket 500 ml',
      code: 'BZ-SKU-00012322',
      packSize: 100,
      unitOfMeasurement: 'Each'
    },
    priceDetails: {
      unitPrice: 100,
      taxPercentage: 0.18
    },
    quantity: {
      totalQuantity: 90000,
      fulfilled: 10000
    },
    amount: {
      totalAmount: 9567800,
      fulfilled: 576700,
    },
    vendors: [{
      name: 'Shree Amba Materials Ltd.',
      avatar: 'https://joeschmoe.io/api/v1/random'
    }, {
      name: 'Acme Vendor',
      avatar: 'https://joeschmoe.io/api/v1/random'
    }]
  }
]

const DetailHolder = props => {
  const [form] = Form.useForm();
  const initialValues = {
    buyerName: 'Shree jagdamba coolant llp'
  }

  return (
    <Layout className={style['content-container']}>
      <PageHeader ghost={false}
        title="PO/123123/123FY92"
        //subTitle="Created"
        extra={[
          <Dropdown.Button
            onClick={handleMenuClick}
            overlay={menu}>Actions</Dropdown.Button>
        ]} />
      <Row>
        <Col span={16}>
          <Table columns={columns} dataSource={data} />
        </Col>
        <Col span={8}>
          <Card>
            <Row>
              <Col span={12}>
                <Statistic title="Completion" value={9823322.00} />
              </Col>
              <Col span={12}>
                <Statistic title="Total" value={19823322.00} />
              </Col>
            </Row>
          </Card>
          <Card title="Something really cool">
            <Form layout='vertical' form={form} initialValues={initialValues}>
              <Form.Item name="buyerName" label="Buyer Name">
                <Space direction='vertical' size={0}>
                  <Space direction='horizontal' style={{ width: '100%', justifyContent: 'space-between' }} size={0}>
                    <Text>{buyerName}</Text>
                    <Button type='link'>
                      <EditOutlined />
                    </Button>
                  </Space>
                  <Input value={buyerName} bordered={true} />
                  <DatePicker />
                  <Select>
                    <Option value="ritika">Ritika</Option>
                  </Select>
                  <Rate />
                  <InputNumber />
                  <Dragger>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                      band files
                    </p>
                  </Dragger>
                  <AutoComplete />
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

DetailHolder.defaultProps = {

};

DetailHolder.propTypes = {

};

export default DetailHolder;