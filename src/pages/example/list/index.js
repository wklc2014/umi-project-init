import React from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import propTypes from 'prop-types';
import { Card, Button } from 'antd';

function ListPage(props) {

  const { list, dispatch } = props;

  const getFetch = () => {
    dispatch({ type: 'example/fetch' });
  }

  const cityListEle = list.map((d, i) => {
    const text = `${d.name} - ${d.sex}`;
    return (
      <li key={i}>
        <Link to={`/example/list/${d.id}`}>{text}</Link>
      </li>
    )
  })

  return (
    <Card title="列表">
      <p>
        <Button type="primary" onClick={getFetch}>请求</Button>
      </p>
      <ul>{cityListEle}</ul>
    </Card>
  )
}

ListPage.propTypes = {
  list: propTypes.array,
}

ListPage.defaultProps = {
  list: [],
}

function mapStateToProps(state) {
  const { example } = state;
  return {
    list: example.list,
  }
}

export default connect(mapStateToProps)(ListPage);
