import React from 'react';
import Card from './Card';
import '../styles/TenDay.scss';


class TenDay extends React.Component {
  render () {
    return (
      <section className="ten-day">
        <Card cardClass="ten-day-card" array={["Sunday","68°",<i className="far fa-sun"></i>]}/>
        
      </section>
    )
  }
}

export default TenDay;