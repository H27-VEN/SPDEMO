export default function profile(state = {}, action) {
  let newState;
  switch (action.type) {
    case 'FETCH_PROFILES_SUCCESS':
      newState = { ...state, data: action.payload };
      break;

    case 'FETCH_PROFILES_ERROR':
      newState = { ...state, data: action.payload };
      break;

    default:
      newState = { ...state };
      break;
  }

  return newState;
}
