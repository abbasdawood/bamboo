import React from 'react';
import PropTypes from 'prop-types';
import style from './Header.module.scss';

import {
  Avatar,
  PageHeader,
  Badge,
  Input
} from 'antd';

import { NotificationOutlined } from '@ant-design/icons';

const { Search } = Input;

const Header = props => {
  return (
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
  );
};

Header.defaultProps = {
  
};

Header.propTypes = {
  
};

export default Header;