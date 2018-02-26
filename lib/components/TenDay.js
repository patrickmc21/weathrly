import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import '../../styles/TenDay.scss';


const TenDay = (props) => {
  return (
    <section className="ten-day">
      {
        props.array.map((day, index) => {
          return (<Card 
            key={index} 
            cardClass="ten-day-card" 
            array={
              [day.day, 
                <img src={day.img} />, 
                `${day.high}/${day.low}`]
            } 
          />);
        })
      }  
    </section>
  );
};

TenDay.propTypes = {
  array: PropTypes.array
};

export default TenDay;