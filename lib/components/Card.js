import React from 'react';
import CardContent from './CardContent';
import PropTypes from 'prop-types';
import '../../styles/Card.scss';


const Card = (props) => {
  return (
    <article className={props.cardClass}>
      <ul>
        {
          props.array.map((weatherInfo, index) => {
            return <CardContent key={index} weatherInfo={weatherInfo}/>;
          })
        }
      </ul>
    </article>
  );
};

Card.propTypes = {
  cardClass: PropTypes.string,
  array: PropTypes.array
};

export default Card;
