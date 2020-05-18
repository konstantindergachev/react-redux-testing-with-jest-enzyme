import { TYPES } from '../../types/post-types';
import postsReducer from './posts-reducer';

describe('Posts reducer', () => {
  it('should return default state', () => {
    const initialState = {};
    const newState = postsReducer(initialState, {});
    expect(newState).toEqual({});
  });
  it('should return new state if receiving type', () => {
    const initialState = {
      posts: [],
      success: false,
      error: '',
    };
    const posts = [ { title: 'Test 1' }, { title: 'Test 2' }, { title: 'Test 3' } ];
    const success = true;
    const newState = postsReducer(initialState, {
      type: TYPES.GET_POSTS,
      payload: { posts, success },
    });
    const error = '';
    expect(newState).toEqual({ posts, success, error });
  });
  it('should return an error', () => {
    const initialState = {
      posts: [],
      success: false,
      error: '',
    };
    const error = 'Return some error';
    const newState = postsReducer(initialState, {
      type: TYPES.POSTS_ERROR,
      payload: error,
    });
    const posts = [];
    const success = false;
    expect(newState).toEqual({ posts, success, error });
  });
});
