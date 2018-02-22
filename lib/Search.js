import React from 'react';
import '../styles/Search.scss';


class Search extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      location: ''

    }
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(event) {
    event.preventDefault()
    console.log(this.state)
    this.props.updateWeather(this.state)
  }

 

  render () {
    return (
      <form>
        <input type="text" name="search" placeholder="Enter City, State or Zip" id="search" onChange={ (event) => {
          this.setState({location: event.target.value})
        }}/>
        <input type="submit" name="submit-search" value="Search" className='submit-search' onClick={this.handleClick}/>
      </form>
    )
  }
}

export default Search;