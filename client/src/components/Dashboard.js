import React from 'react';
import {Link} from 'react-router-dom'
import SurveyList from './surveys/SurveyList';

//Component used to display survey list component and add new survey functionality
const Dashboard = () => {
  return(
    <div>
      <SurveyList />
      <div className="fix-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
