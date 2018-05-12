export default function posts(state={}, action) {
    let newState;
    switch(action.type) {
   
        case 'FETCH_POSTS_SUCCESS':
            newState = {...state, data: action.payload};
        break;

        case 'FETCH_POSTS_ERROR':
            newState = {...state, data: action.payload};
        break;

        default: 
            newState = {...state};
    
    }
    return newState;
}