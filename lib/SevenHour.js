import React from 'react';
import Card from './Card';
import '../styles/SevenHour.scss';


class SevenHour extends React.Component  {
  render () {
    return (
      <article className="hourly">
        <Card cardClass="hourly-card" array={["1200", <i className="far fa-sun"></i>, "58°"]}/>
        <Card cardClass="hourly-card" array={["1200", <i className="far fa-sun"></i>, "58°"]}/>
        <Card cardClass="hourly-card" array={["1200", <i className="far fa-sun"></i>, "58°"]}/>
        <Card cardClass="hourly-card" array={["1200", <i className="far fa-sun"></i>, "58°"]}/>
        <Card cardClass="hourly-card" array={["1200", <i className="far fa-sun"></i>, "58°"]}/>
        <Card cardClass="hourly-card" array={["1200", <i className="far fa-sun"></i>, "58°"]}/>
        <Card cardClass="hourly-card" array={["1200", <i className="far fa-sun"></i>, "58°"]}/>
      </article>
    )
  }
}

export default SevenHour;