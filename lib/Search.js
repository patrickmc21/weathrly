import React from 'react';
const Trie = require('@patrickmc21/prefix-trie/lib/Trie');
import cityList from './city-list'
import '../styles/Search.scss';



class Search extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
      trie: new Trie(),
      wordSuggestions: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.sendToStorage = this.sendToStorage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.state.trie.populate(cityList.data)
  }
  handleClick(event) {
    event.preventDefault()
    this.state.trie.insert(this.state.location);
    this.state.trie.select(this.state.location);
    this.props.updateWeather(this.state.location)
    this.sendToStorage(this.state.location)
  }

  sendToStorage(location) {
    localStorage.setItem('location', location)
  }

  handleChange(event) {
    this.setState({location: event.target.value, wordSuggestions: this.state.trie.suggest(event.target.value)})
  }

  render () {
    return (
      <form>
        <input 
          list="locations" 
          id="search" 
          name="search"
          placeholder="Enter City, State or Zip"
          value={this.state.location}
          onChange={this.handleChange}/>
          <datalist id="locations">
            {
              this.state.wordSuggestions.map(suggestion => {
                return (<option value={suggestion}/>)
              })
            }
          </datalist>
        <input 
          type="submit" 
          name="submit-search" 
          value="Search" 
          className='submit-search' 
          onClick={this.handleClick}/>
      </form>
    )
  }
}

export default Search;