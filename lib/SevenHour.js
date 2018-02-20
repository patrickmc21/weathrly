import React from 'react';
import Card from './Card';
import '../styles/SevenHour.scss';


class SevenHour extends React.Component  {
  constructor(props) {
    super(props)
    this.array = this.props.array
  }
  render () {
    return (
      <article className="hourly">
        {
          this.array.map((day, index) => {
            return (<Card key={index} cardClass="hourly-card" array={[day.hour, <img src={day.logo}/>, day.temp, day.condition, day.wind]}/>)
          })
        }
      </article>
    )
  }
}

export default SevenHour;