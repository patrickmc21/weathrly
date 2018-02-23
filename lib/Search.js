import React from 'react';
import '../styles/Search.scss';


class Search extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      location: ''

    }
    this.handleClick = this.handleClick.bind(this);
    this.sendToStorage = this.sendToStorage.bind(this);

  }
  handleClick(event) {
    event.preventDefault()
    this.props.updateWeather(this.state.location)
    this.sendToStorage(this.state.location)
  }

  sendToStorage(location) {
    localStorage.setItem('location', location)
  }

  render () {
    return (
      <form>
        <input
          type="text"
          name="search"
          placeholder="Enter City, State or Zip"
          id="search"
          value={this.state.location}
          onChange={ (event) => {
          this.setState({location: event.target.value})
        }}/>
        <input type="submit" name="submit-search" value="Search" className='submit-search' onClick={this.handleClick}/>
      </form>
    )
  }
}

export default Search;