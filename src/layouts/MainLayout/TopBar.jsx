/**
 * 主体布局中，右侧顶部标题 + 用户信息
 */
import withRouter from 'umi/withRouter';
import React from 'react';
import propTypes from 'prop-types';

import getPageTitle from '../common/getPageTitle.js';

function TopBar(props) {
  const { location } = props;
  const { pathname } = location;
  const pageTitle = getPageTitle(pathname);
  const title = pageTitle.reverse().join(' > ');

  return (
    <section className="top-bar-wraper cf">
      <div className="top-bar">{title}</div>
    </section>
  )
}

TopBar.propTypes = {
  location: propTypes.object.isRequired,
}

TopBar.defaultProps = {

}

export default withRouter(TopBar);
