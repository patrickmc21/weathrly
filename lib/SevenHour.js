import React from 'react';
import Card from './Card';
import '../styles/SevenHour.scss';


class SevenHour extends React.Component  {
  render () {
    return (
      <article className="hourly">
        <Card cardClass="hourly-card" time="1200" image="far fa-sun" temp="58°"/>
        <Card cardClass="hourly-card" time="1300" image="far fa-sun" temp="60°"/>
        <Card cardClass="hourly-card" time="1200" image="far fa-sun" temp="60°"/>
        <Card cardClass="hourly-card" time="1200" image="far fa-sun" temp="60°"/>
        <Card cardClass="hourly-card" time="1200" image="far fa-sun" temp="60°"/>
        <Card cardClass="hourly-card" time="1200" image="far fa-sun" temp="60°"/>
        <Card cardClass="hourly-card" time="1200" image="far fa-sun" temp="60°"/>
      </article>
    )
  }
}

export default SevenHour;