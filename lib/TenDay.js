import React from 'react';
import Card from './Card';
import '../styles/TenDay.scss';


class TenDay extends React.Component {
  render () {
    return (
      <section className="ten-day">
        <Card cardClass="ten-day-card" time="Sunday" temp="68°" image="far fa-sun"/>
        <Card cardClass="ten-day-card" time="Sunday" temp="68°" image="far fa-sun"/>
        <Card cardClass="ten-day-card" time="Sunday" temp="68°" image="far fa-sun"/>
        <Card cardClass="ten-day-card" time="Sunday" temp="68°" image="far fa-sun"/>
        <Card cardClass="ten-day-card" time="Sunday" temp="68°" image="far fa-sun"/>
        <Card cardClass="ten-day-card" time="Sunday" temp="68°" image="far fa-sun"/>
        <Card cardClass="ten-day-card" time="Sunday" temp="68°" image="far fa-sun"/>
        <Card cardClass="ten-day-card" time="Sunday" temp="68°" image="far fa-sun"/>
        <Card cardClass="ten-day-card" time="Sunday" temp="68°" image="far fa-sun"/>
        <Card cardClass="ten-day-card" time="Sunday" temp="68°" image="far fa-sun"/>
      </section>
    )
  }
}

export default TenDay;