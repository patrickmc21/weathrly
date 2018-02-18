import React from 'react';
import '../styles/Card.scss';


class Card extends React.Component  {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <article className={this.props.cardClass}>
        <ul>
          <li>{this.props.time}</li>
          <li>{this.props.temp}</li>
          <li><i className={this.props.image}></i>
          </li>
        </ul>
      </article>
    )
  }
}

export default Card;