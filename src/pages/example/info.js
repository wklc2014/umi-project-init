import React from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import propTypes from 'prop-types';
import { Button, Card } from 'antd';

function InfoPage(props) {

  function increase() {
    props.dispatch({
      type: 'example/increase',
    })
  }

  function reduce() {
    props.dispatch({
      type: 'example/reduce',
    })
  }



  return (
    <Card title="测试页面">
      <p>Example Page</p>
      <p><Link to="/">返回首页</Link></p>
      <p>{props.count}</p>
      <p>
        <Button type="primary" onClick={increase}>增加</Button>
      </p>
      <p>
        <Button type="primary" onClick={reduce}>减少</Button>
      </p>
    </Card>
  )
}

InfoPage.propTypes = {
  count: propTypes.number,
}

InfoPage.defaultProps = {
  count: 0,
}

function mapStateToProps(state) {
  const { example } = state;
  return {
    count: example.count,
  }
}

export default connect(mapStateToProps)(InfoPage);
