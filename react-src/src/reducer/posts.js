export default function posts(state = { data: [], error: null }, action) {
  let newState;
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS':
      newState = { ...state, data: action.payload, error: null };
      break;

    case 'FETCH_POSTS_ERROR':
      newState = { ...state, data: [], error: action.payload };
      break;

    default:
      newState = { ...state };
  }
  // console.log("new state in post reducer: ", newState);
  return newState;
}
