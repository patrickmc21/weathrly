import React from 'react';
const Trie = require('@patrickmc21/prefix-trie/lib/Trie');
import cityList from '../data/city-list'
import '../../styles/Search.scss';


class Search extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
      trie: '',
      wordSuggestions: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getFromStorage = this.getFromStorage.bind(this);
    this.sendTrieToStorage = this.sendTrieToStorage.bind(this);
  }
  componentDidMount() {
    if(localStorage.length > 1) {
      this.getFromStorage()
    } else {
      const trie = new Trie()
      trie.populate(cityList.data);
      this.sendTrieToStorage(trie)
      this.setState({trie: trie})
    }
  }

  sendTrieToStorage(trie) {
    let stringTrie = JSON.stringify(trie)
    localStorage.setItem('trie', stringTrie);
  }

  getFromStorage() {
    let trie = new Trie()
    let retrievedData = localStorage.getItem('trie');
    let parsedData = JSON.parse(retrievedData);
    trie.children = parsedData.children;
    trie.count = parsedData.count;
    this.setState({trie: trie});
  }

  handleClick(event) {
    event.preventDefault()
    this.state.trie.insert(this.state.location);
    this.state.trie.select(this.state.location);
    this.props.updateWeather(this.state.location);
    this.sendTrieToStorage(this.state.trie);
    this.setState({location: ''})
  }

  handleChange(event) {
    this.setState({
      location: event.target.value, 
      wordSuggestions: this.state.trie.suggest(event.target.value)
    });
  }

  render () {
    return (
      <form id="main-search">
        <input 
          list="locations" 
          id="search" 
          name="search"
          placeholder="Enter City, State or Zip"
          value={this.state.location}
          onChange={this.handleChange}/>
          <datalist id="locations">
            {
              this.state.wordSuggestions.map((suggestion, index) => {
                return (<option key={index} value={suggestion}/>)
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