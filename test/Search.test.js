import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/components/Search';
const Trie = require('@patrickmc21/prefix-trie/lib/Trie');
import cityList from '../lib/data/city-list'

describe('Search component shallow', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Search/>)
  })

  it('should instantiate our good friend, Search', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have a form tag as a wrapper', () => {
    expect(wrapper.is('form')).toEqual(true)
  })

  it('should have a state of location, and be empty string by default', () => {
    expect(wrapper.instance().state.location).toBeDefined();
    expect(wrapper.instance().state.location).toEqual('');
  })

  it('should have a state of trie, and be empty string by default', () => {
    expect(wrapper.instance().state.trie).toBeDefined();
    expect(wrapper.instance().state.trie).toEqual('');
  })

  it('should have a state of word suggestions, and be empty array by default', () => {
    expect(wrapper.instance().state.wordSuggestions).toBeDefined();
    expect(wrapper.instance().state.wordSuggestions).toEqual([]);
  })

  it('should have and input field for users to type in of type list', () => {
    expect(wrapper.childAt(0).is('input')).toEqual(true)
    expect(wrapper.find('input').first().props().list).toEqual('locations')
  })

  it('should have a datalist tag to list city suggestions', () => {
    expect(wrapper.find('datalist').length).toEqual(1);
  })

  it('should produce city suggestions equal to the word suggestions state', () => {
    expect(wrapper.instance().state.wordSuggestions.length).toEqual(0);
    expect(wrapper.find('option').length).toEqual(0);
    wrapper.instance().setState({wordSuggestions: [1,2]});
    expect(wrapper.instance().state.wordSuggestions.length).toEqual(2);
    expect(wrapper.find('option').length).toEqual(2);
    wrapper.instance().setState({wordSuggestions: [1,2,3,4,5]});
    expect(wrapper.instance().state.wordSuggestions.length).toEqual(5);
    expect(wrapper.find('option').length).toEqual(5);
  })

  it('should have a submit button', () => {
    expect(wrapper.find('input').last()).toBeDefined();
    expect(wrapper.find('input').last().props().type).toEqual('submit')
  })

  it('should have a method called handleClick', () => {
    expect(wrapper.instance().handleClick).toBeDefined();
  })

})

describe('Search component mount', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Search/>)
  })

  it('should instantiate our good fried, Search', () => {
    expect(wrapper).toBeDefined();
  })

  it('should update the state of trie to a prefix-trie on mount', () => {
    expect(wrapper.instance().state.trie).toBeInstanceOf(Trie);
  })

  it('should send the trie to storage on mount', () => {
    expect(localStorage.getItem('trie')).toEqual(JSON.stringify(wrapper.instance().state.trie))
  });

  it('should populate the trie with suggestions', () => {
    expect(wrapper.instance().state.trie.count).toEqual(1000);
  })

  it('should get an old trie from storage if it is available', () => {
    wrapper.instance().state.trie.insert('wow');
    expect(wrapper.instance(0).state.trie.count).toEqual(1001);
    wrapper.instance().sendTrieToStorage(wrapper.instance().state.trie);
    wrapper.unmount();
    expect(localStorage.length).toEqual(2);
    wrapper.mount();
    expect(wrapper.instance(0).state.trie.count).toEqual(1001);
  })

  it('should run updateWeather on click of the submit button', () => {
    const updateWeather = jest.fn();
    wrapper = mount(<Search updateWeather={ updateWeather } />);
    wrapper.instance().setState({location: 'Denver'})
    wrapper.find('input').last().simulate('click');
    expect(wrapper.props().updateWeather).toHaveBeenCalledTimes(1)
  })

  it('should update location on handleChange', () => {
    const event = {target: {value: 'Denver'}};
    wrapper.find('input').first().simulate('change', event);
    expect(wrapper.state().location).toEqual('Denver')
  })


})