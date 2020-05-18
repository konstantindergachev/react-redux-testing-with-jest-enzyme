import { shallow } from 'enzyme';
import React from 'react';
import { checkProps, findByTestAttribute } from '../../../__utils__';
import Button from './Button';

describe('Button Component', () => {
  describe('Checking PropTypes', () => {
    it('should NOT throw a warning', () => {
      const expectedProps = {
        emitEvent: () => {},
        toggleButton: () => {},
        postsNumber: 3,
        text: 'Example Button Text',
      };
      const propsError = checkProps(Button, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe('Button renders', () => {
    let component;
    let mockFuncion;
    beforeEach(() => {
      mockFuncion = jest.fn();
      const props = {
        emitEvent: mockFuncion,
        toggleButton: mockFuncion,
        postsNumber: 3,
        text: 'Example Button Text',
      };

      component = shallow(<Button {...props} />);
    });
    it('should render a button', () => {
      const button = findByTestAttribute(component, 'btn');
      expect(button.length).toBe(1);
    });

    it('should emit callback on click event', () => {
      const button = findByTestAttribute(component, 'btn');
      button.simulate('click'); //comment it to check to pass this test or not
      const callback = mockFuncion.mock.calls.length;
      expect(callback).toBe(2);
    });
  });
});
