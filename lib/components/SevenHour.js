import React from 'react';
import Card from './Card';
import '../../styles/SevenHour.scss';


const SevenHour = (props) =>  {
  return (
    <article className="hourly">
      {
        props.array.map((day, index) => {
          return (<Card key={index} cardClass="hourly-card" array={[day.hour, <img src={day.logo}/>, day.temp, day.condition, day.wind]}/>)
        })
      }
    </article>
  )
}

export default SevenHour;