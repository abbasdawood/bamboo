import React from 'react';
import PropTypes from 'prop-types';
import style from './Header.module.scss';

import {
  Avatar,
  PageHeader,
  Badge,
  Input,
  Button,
  Row,
  Statistic
} from 'antd';

import { NotificationOutlined } from '@ant-design/icons';

const { Search } = Input;

const Header = props => {
  return (
    <>
      <PageHeader
        className={style['top-page-header']}
        // onBack={() => window.history.back()}
        extra={[
          <Search
            placeholder="input search text" allowClear
            style={{ width: 200 }} />,
          <Avatar src="https://joeschmoe.io/api/v1/random" />,
          <Badge count={1}>
            <Avatar shape="square" icon={<NotificationOutlined />} />
          </Badge>
        ]}
      >
      </PageHeader>
      <PageHeader
        className={style['secondary-page-header']}
        // onBack={() => window.history.back()}
        title="Title"
        subTitle="This is a subtitle"
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>,
        ]}>
        { props.stats && 
        <Row>
          <Statistic title="Status" value="Pending" />
          <Statistic
            title="Price"
            prefix="$"
            value={568.08}
            style={{
              margin: '0 32px',
            }}
          />
          <Statistic title="Balance" prefix="$" value={3345.08} />
        </Row>
      }
      </PageHeader>
    </>
  );
};

Header.defaultProps = {
  stats: true
};

Header.propTypes = {
  stats: PropTypes.bool
};

export default Header;