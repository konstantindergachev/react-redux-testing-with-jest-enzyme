import moxios from 'moxios';
import { postsReciever } from '../src/redux/actions/posts/posts-actions';
import { testStore } from '../__utils__';

describe('Fetch posts action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('store is updated correctly', () => {
    const expectedState = [
      {
        title: 'Example 1',
        description: 'Some text 1',
      },
      {
        title: 'Example 2',
        description: 'Some text 2',
      },
      {
        title: 'Example 3',
        description: 'Some text 3',
      },
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(postsReciever(10)).then(() => {
      const newState = store.getState();
      expect(newState.posts.posts).toBe(expectedState);
    });
  });
});
