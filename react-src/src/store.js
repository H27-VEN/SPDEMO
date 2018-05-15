import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import posts from './reducer/posts';
import profile from './reducer/profile';


const middleware = applyMiddleware(thunk);
const reducers = combineReducers({
  posts,
  profile,
});

export default createStore(reducers, {}, middleware);
