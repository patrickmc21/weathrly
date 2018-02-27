import React from 'react';
import PropTypes from 'prop-types';


const CardContent = (props) =>  {
  return (
    <li>{props.weatherInfo}</li>
  );
};

CardContent.propTypes = {
  weatherInfo: PropTypes.oneOfType( [
    PropTypes.string,
    PropTypes.object
    ])
};

export default CardContent;