import { TYPES } from '../../types/post-types';
const initialState = {
  posts: [],
  success: false,
  error: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
        success: action.payload.success,
      };
    case TYPES.POSTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
