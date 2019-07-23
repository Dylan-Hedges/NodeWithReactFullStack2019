import {FETCH_USER} from '../actions/types';

//Auth Reducer - Makes Redux Store aware whether or not the user is logged in
export default function (state = null, action) {
console.log(action);
  switch (action.type){
    case FETCH_USER:
      //Returns Google Info (logged in) OR false (not logged in, returns empty string, in JS an empty string = false)
      return action.payload || false;
    default:
      //Returns null (waiting)
      return state;
  }
}
