import { shallow } from 'enzyme';
import React from 'react';
import { checkProps, findByTestAttribute } from '../../../__utils__';
import Post from './Post';

describe('Posts Component', () => {
  describe('Checking PropTypes', () => {
    it('should NOT throw a warning', () => {
      const expectedProps = {
        title: 'Example title',
        description: 'Example description',
      };
      const propsError = checkProps(Post, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe('Post renders', () => {
    let component;
    beforeEach(() => {
      const props = {
        title: 'Example title',
        description: 'Example description',
      };

      component = shallow(<Post {...props} />);
    });
    it('should render without error', () => {
      const post = findByTestAttribute(component, 'post');
      expect(post.length).toBe(1);
    });
    it('should render a title', () => {
      const title = findByTestAttribute(component, 'title');
      expect(title.length).toBe(1);
    });
    it('should render a description', () => {
      const description = findByTestAttribute(component, 'description');
      expect(description.length).toBe(1);
    });
  });
  describe('Should NOT render', () => {
    let component;
    beforeEach(() => {
      const props = {
        description: 'Example description',
      };

      component = shallow(<Post {...props} />);
    });
    it('component is not render', () => {
      const post = findByTestAttribute(component, 'post');
      expect(post.length).toBe(0);
    });
  });
});
