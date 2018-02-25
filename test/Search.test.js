import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/components/Search';

describe.skip('Search component shallow', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Search/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

})

describe.skip('Search component mount', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Search/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

})