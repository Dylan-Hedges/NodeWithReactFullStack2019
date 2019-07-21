import { combineReducers } from 'redux';
import authReducer from './authReducer';

//Exports Reducers - keys here are used in Redux Store
export default combineReducers({
  auth: authReducer
});
