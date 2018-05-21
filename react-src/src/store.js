import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import posts from './reducer/posts';
import profile from './reducer/profile';


const middleware = applyMiddleware(thunk, promise());
const reducers = combineReducers({
  posts,
  profile,
});

export default createStore(reducers, {}, middleware);
