import React, {Component} from 'react';

//Display component that shows landing page when user first enters app
const Landing = () => {
  return(
    <div id="landing">
      <div className="introtext">
        <h4>Discover what you can learn about your users</h4>
        <h6>Sign in below are start creating surveys to send to your users</h6>
      </div>
      <button className="green btn-flat btn-large white-text"><strong>Discover Insights</strong></button>
    </div>
  );
}

export default Landing;
