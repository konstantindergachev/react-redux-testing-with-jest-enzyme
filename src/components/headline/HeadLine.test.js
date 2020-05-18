import { shallow } from 'enzyme';
import React from 'react';
import { checkProps, findByTestAttribute } from '../../../__utils__';
import HeadLine from './HeadLine';

const setUp = (props = {}) => shallow(<HeadLine {...props} />);

describe('Headline Component', () => {
  describe('Checking PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        title: 'Test title',
        description: 'Test description',
        persons: [
          {
            fName: 'Test fName',
            lName: 'Test lName',
            email: 'test@email.com',
            age: 32,
            onlineStatus: false,
          },
        ],
      };
      const propsErr = checkProps(HeadLine, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Have props', () => {
    let component;

    beforeEach(() => {
      const props = {
        title: 'Test header',
        description: 'Some test description',
      };
      component = setUp(props);
    });

    it('should render without errors', () => {
      const wrapper = findByTestAttribute(component, 'headline');
      expect(wrapper.length).toBe(1);
    });

    it('should render a H1', () => {
      const h1 = findByTestAttribute(component, 'title');
      expect(h1.length).toBe(1);
    });

    it('should render a description', () => {
      const p = findByTestAttribute(component, 'description');
      expect(p.length).toBe(1);
    });
  });

  describe('Have no props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it('should not render', () => {
      const component = findByTestAttribute(wrapper, 'headline');
      expect(component.length).toBe(0);
    });
  });
});
