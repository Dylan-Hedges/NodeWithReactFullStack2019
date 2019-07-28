import axios from 'axios';
import {FETCH_USER} from './types';

//Fetch User Action Creator - Redux Thunk lets us pause automatically dispatching an action so that we can make an Ajax request to the Express API, once completed then it dispatches an action with the result to the reducers
export const fetchUser = () => {
  return async (dispatch) => {
    //Makes a request to Express back end to check if user is logged in
    const res = await axios.get('/api/current_user');
    //Dispatches the action only with the users Google id
    dispatch ({type: FETCH_USER, payload: res.data});
  };
};

//Sends Stripe auth token to back end (Express)
export const handleToken = (token) =>{
  return async (dispatch) => {
    const res = await axios.post('/api/stripe', token);
    dispatch ({type: FETCH_USER, payload: res.data});
  };
};
