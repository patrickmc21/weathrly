import React from 'react';
import CardContent from './CardContent';
import '../../styles/Card.scss';


const Card = (props) => {
  return (
    <article className={props.cardClass}>
      <ul>
      {
        props.array.map((item, index) => {
          return <CardContent key={index} weatherInfo={item}/>
        })
      }
      </ul>
    </article>
  )
}

export default Card;
