import React from 'react';
import Card from './Card';
import '../styles/TenDay.scss';


class TenDay extends React.Component {
  constructor(props) {
    super(props)
    this.array = this.props.array;
  }
  render () {
    console.log(this.array)
    return (
      <section className="ten-day">
        {
          this.array.map(day => {
          return (<Card cardClass="ten-day-card" array={[day.day, <img src={day.img} />, `${day.high}/${day.low}`]} />)
          })
        }
        
      </section>
    )
  }
}

export default TenDay;