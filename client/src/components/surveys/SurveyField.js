import React from 'react';

//Renders a single Field with a label
export default ({input, label}) => {
  return(
    <div>
      <label>{label}</label>
      <input {...input}/>
    </div>
  );
};
