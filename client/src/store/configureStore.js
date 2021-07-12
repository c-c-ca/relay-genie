import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { rootReducer } from './reducers';

const configureStore = () =>
  createStore(rootReducer, {}, applyMiddleware(reduxThunk));

export default configureStore;
