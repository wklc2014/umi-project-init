/**
 * 主体布局组件
 */
import propTypes from 'prop-types';

import withTitle from './common/withTitle.js';
import MainLayout from './MainLayout/MainLayout.jsx';

function Index(props) {
  const { location, children } = props;
  const { pathname } = location;

  if (pathname.startsWith('/example')) {
    return <MainLayout {...props} />;
  }

  return children;
}

Index.propTypes = {
  location: propTypes.object.isRequired,
}

Index.defaultProps = {
}

export default withTitle(Index);
