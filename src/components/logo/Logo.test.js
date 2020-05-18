import { shallow } from 'enzyme';
import React from 'react';
import { findByTestAttribute } from '../../../__utils__';
import Logo from './Logo';
const setUp = (props = {}) => shallow(<Logo {...props} />);

describe('Logo Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should render a logo', () => {
    const logo = findByTestAttribute(component, 'logo');
    expect(logo.length).toBe(1);
  });
});
