import React from 'react';

//Display on screen what the user has entered - allows user to check and confirm everything is correct
const SurveyFormReview = ({onCancel}) => {
  return(
    <div>
      <h5>Please confirm your entries</h5>
      <button className="yellow darken-3 btn-flat"
      onClick={onCancel}
      >
      Back
      </button>
    </div>
  );
};

export default SurveyFormReview;
