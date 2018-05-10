import { createStore, applyMiddleware, combineReducers } from 'redux';
import data from './reducer/data.js';
import thunk from 'redux-thunk';
const middleware = applyMiddleware(thunk);
const reducers = combineReducers({
    data
});

export default createStore(reducers, {}, middleware);
