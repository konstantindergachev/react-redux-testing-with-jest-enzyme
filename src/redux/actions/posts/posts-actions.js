import { api } from '../../../api';
import { TYPES } from '../../types/post-types';

export const postsReciever = () => async (dispatch) => {
  try {
    const posts = await api.fetchPosts();
    dispatch({
      type: TYPES.GET_POSTS,
      payload: { posts, success: true },
    });
  } catch (err) {
    dispatch({
      type: TYPES.POSTS_ERROR,
      payload: 'This is an error',
    });
  }
};
