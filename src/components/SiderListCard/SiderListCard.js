import React from 'react';
import PropTypes from 'prop-types';
import style from './SiderListCard.module.scss';
import { Typography, Card, Avatar, Space, Tag, Row, Col } from 'antd';

const { Title, Text } = Typography;

const SiderListCard = props => {
  return (
    <div className={style.root}>
      <Card>
        <Space direction="vertical" className={style.holder} size={0.5}>
          <Title level={5}>
            BZPO-11029-23122
          </Title>
          <Text>
            75,000.00 INR
          </Text>
          <Text type="secondary">
            17 Oct, 2021 • 9:40 pm
          </Text>
            <Row justify="space-between" align="bottom">
              <Col span={12}>
                <Tag color="green">Open</Tag>
              </Col>
              <Col span={12} className={style['avatar-right']}>
                <Avatar src="https://joeschmoe.io/api/v1/random" />
              </Col>
            </Row>
        </Space>
      </Card>
    </div>
  );
};

SiderListCard.defaultProps = {

};

SiderListCard.propTypes = {

};

export default SiderListCard;