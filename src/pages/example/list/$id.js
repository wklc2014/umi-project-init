import React from 'react';
import propTypes from 'prop-types';

export default function City(props) {
  const { match = {} } = props;
  const { params = {} } = match;
  const { id = '' } = params;

  return (
    <div>
      {id}
    </div>
  )
}

City.propTypes = {
  match: propTypes.object.isRequired,
}

City.defaultProps = {

}
