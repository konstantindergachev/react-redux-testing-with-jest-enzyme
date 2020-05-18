import { shallow } from 'enzyme';
import React from 'react';
import { findByTestAttribute } from '../../../__utils__';
import Header from './Header';

const setUp = (props = {}) => shallow(<Header {...props} />);

describe('Header Component', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttribute(component, 'header');
    expect(wrapper.length).toBe(1);
  });
});
