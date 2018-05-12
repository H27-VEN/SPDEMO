import { createStore, applyMiddleware, combineReducers } from 'redux';
import posts from './reducer/posts';
import profile from './reducer/profile';

import thunk from 'redux-thunk';
const middleware = applyMiddleware(thunk);
const reducers = combineReducers({
    posts,
    profile
});

export default createStore(reducers, {}, middleware);
