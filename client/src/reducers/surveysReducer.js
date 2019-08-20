import {FETCH_SURVEYS} from '../actions/types';

//Reducer - adds the list of surveys returned from the AC to the redux store
export default function(state = [], action){
  switch(action.type){
    case FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  }
}
