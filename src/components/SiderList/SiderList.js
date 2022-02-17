import React from 'react';
import PropTypes from 'prop-types';
import style from './SiderList.module.scss';

import { SiderListCard } from '../../components';

const SiderList = props => {
  return (
    <div className={style['sider-list-container']}>
      <SiderListCard/>
      <SiderListCard/>
      <SiderListCard/>
      <SiderListCard/>
      <SiderListCard/>
      <SiderListCard/>
      <SiderListCard/>
      <SiderListCard/>
      <SiderListCard/>
      <SiderListCard/>
      <SiderListCard/>
    </div>
  );
};

SiderList.defaultProps = {

};

SiderList.propTypes = {

};

export default SiderList;