import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

//BrowserRouter - changes components shown based on URL; Route - sets the rules for what components are shown based on the route the user is on
const App = () => {
  return(
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact={true} path="/" component={Landing} />
          <Route exact={true} path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
