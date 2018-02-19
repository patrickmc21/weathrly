import React from 'react';


class CardContent extends React.Component  {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <li>{this.props.prop}</li>
    )
  }
}

export default CardContent;