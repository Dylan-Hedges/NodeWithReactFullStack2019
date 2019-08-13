import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import {connect} from 'react-redux';
import * as actions from '../actions';

//BrowserRouter - changes components shown based on URL; Route - sets the rules for what components are shown based on the route the user is on
class App extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    return(
      <div className="container">
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact={true} path="/" component={Landing} />
            <Route exact={true} path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
