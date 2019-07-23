import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App.js';
import reducers from './reducers';

//Creates a new Redux Store - passes in reducers, inital state, middleware
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//Wires Redux Store to components
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
   document.querySelector('#root')
 );
