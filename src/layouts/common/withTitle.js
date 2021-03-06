/* eslint-disable */
/**
 * 高阶组件
 * 设置页面标题
 */
import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

import getPageTitle from './getPageTitle.js';

export default function withTitle(WrappedComponent) {
  return class HOC extends Component {

    render() {
      const { location } = this.props;
      const { pathname } = location;
      const pageTitle = getPageTitle(pathname);
      const title = pageTitle.join(' - ');

      return (
        <Fragment>
          <Helmet>
            <title>{title}</title>
          </Helmet>
          <WrappedComponent {...this.props}/>
        </Fragment>
      )
    }
  }
}
