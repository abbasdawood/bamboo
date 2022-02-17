import React from 'react';
import PropTypes from 'prop-types';
import style from './DetailHolder.module.scss';

import { Layout } from 'antd';

const DetailHolder = props => {
  return (
    <Layout className={style['content-container']}></Layout>
  );
};

DetailHolder.defaultProps = {

};

DetailHolder.propTypes = {

};

export default DetailHolder;