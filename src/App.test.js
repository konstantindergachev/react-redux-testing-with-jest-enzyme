import { shallow } from 'enzyme';
import React from 'react';
import { findByTestAttribute, testStore } from '../__utils__';
import App from './App';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />).childAt(0).dive();
  return wrapper;
};

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'Example title 1',
          body: 'Some text 1',
        },
        {
          title: 'Example title 2',
          body: 'Some text 2',
        },
        {
          title: 'Example title 3',
          body: 'Some text 3',
        },
      ],
    };
    wrapper = setUp(initialState);
  });

  it('should render without errors', () => {
    const component = findByTestAttribute(wrapper, 'app-component');
    expect(component.length).toBe(1);
  });

  it('toggleButton method should update state as expected', () => {
    const classInstance = wrapper.instance();
    classInstance.toggleButton();
    const newState = classInstance.state.isBtnHide;
    expect(newState).toBe(true);
  });
  it('getPostNumberInFuture method should return value as expected', () => {
    const classInstance = wrapper.instance();
    const newValue = classInstance.getPostNumberInFuture(3);
    expect(newValue).toBe(4);
  });
});
