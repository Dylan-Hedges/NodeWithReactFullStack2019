import React from 'react';

//Renders a single Field with a label
export default ({input, label, meta:{error, touched}}) => {
  //Pull off label, input, meta(error, touched - displays error on screen if user has touched the field AND there is an error)
  return(
    <div>
      <label>{label}</label>
      <input {...input} style={{marginBottom: '5px'}}/>
      <div className="red-text" style={{marginBottom: '20px'}}>
        {touched && error}
      </div>
    </div>
  );
};
