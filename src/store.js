import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './redux/reducers';

export const middleware = [ thunk ];

export const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const initialState = {};
export const store = createStoreWithMiddleware(
  rootReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
