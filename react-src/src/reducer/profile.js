export default function profile(state = { data: [], error: null }, action) {
  let newState;
  switch (action.type) {
    case 'FETCH_PROFILES_SUCCESS':
      newState = { ...state, data: action.payload, error: null };
      break;

    case 'FETCH_PROFILES_ERROR':
      newState = { ...state, data: [], error: action.payload };
      break;

    default:
      newState = { ...state };
      break;
  }
  // console.log("new state in profile reducer: ", newState);
  return newState;
}
