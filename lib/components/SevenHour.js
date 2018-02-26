import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import '../../styles/SevenHour.scss';


const SevenHour = (props) =>  {
  return (
    <article className="hourly">
      {
        props.array.map((day, index) => {
          return (
            <Card 
              key={index} 
              cardClass="hourly-card" 
              array={
                [day.hour, 
                  <img src={day.logo}/>, 
                  day.temp, 
                  day.condition, 
                  day.wind]
              }
            />
          );
        })
      }
    </article>
  );
};

SevenHour.propTypes = {
  array: PropTypes.array
};

export default SevenHour;