import React from 'react';
import CardContent from './CardContent';
import '../styles/Card.scss';


class Card extends React.Component  {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <article className={this.props.cardClass}>
        <ul>
          {
            this.props.array.map((item, index) => {
              return <CardContent key={index} prop={item}/>
            })
          }
        </ul>
      </article>
    )
  }
}

export default Card;


// <li>{this.props.time}</li>
//           <li>{this.props.temp}</li>
//           <li><i className={this.props.image}></i>
//           </li>