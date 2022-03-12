import React from 'react';
import PropTypes from 'prop-types';
import style from './PageMainHeader.module.scss';

import {
  Button,
  Row,
  Statistic, PageHeader
} from 'antd';

const PageMainHeader = props => {
  return (
    <PageHeader
      className={style['secondary-page-header']}
      ghost={false}
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
      {props.stats &&
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
  );
};

PageMainHeader.defaultProps = {
  stats: true
};

PageMainHeader.propTypes = {
  stats: PropTypes.bool
};

export default PageMainHeader;