import React from 'react';
import PropTypes from 'prop-types';


const CardContent = (props) =>  {
  return (
    <li>{props.weatherInfo}</li>
  );
};

CardContent.propTypes = {
  weatherInfo: PropTypes.string
};

export default CardContent;