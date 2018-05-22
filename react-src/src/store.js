/* Using redux zero you can set the initial state in the store and call action  
   There is no need for reducer in redux-zero
*/

//import { createStore, applyMiddleware, combineReducers } from 'redux';
//import thunk from 'redux-thunk';
//import promise from 'redux-promise-middleware';
import createStore from "redux-zero";
//import posts from './reducer/posts';
//import profile from './reducer/profile';

// const middleware = applyMiddleware(thunk, promise());
// const reducers = combineReducers({
//   posts,
//   profile,
// });

export default createStore({
    profile: { data: [], error: null },
    post: { data: [], error: null }
});
