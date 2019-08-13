import _ from 'lodash';
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

//Array for fields - each entry is used to generate a new <Field />
const FIELDS = [
  {label: 'Survey Title', name:'title'},
  {label: 'Subject Line', name:'subject'},
  {label: 'Email body', name:'body'},
  {label: 'Recipient List', name:'emails'}
];

//Form that user can input data into
class SurveyForm extends Component{
  //Creates a new <Field /> component for each entry in the FIELDS array - Uses Lodash to iterate over the FIELDS array, generates a new field and passes in label and name (the key the data will be saved under in Redux Store)
  renderFields(){
    return _.map(FIELDS, field =>{
      return <Field key={field.name} component={SurveyField} type="text" label={field.label} name={field.name}/>
    });
  }
  //Renders the fields on screen - Uses the renderFields() helper function to loop through the FIELDS array and create the fields
  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
          <button type="submit" className="teal btn-flat right white-text">Next<i className="material-icons right">done</i></button>
        </form>
      </div>
    );
  }
}

//Validation function - performs checks before submitting the form, part of reduxForm, wired up at the bottom (similar to how mapStateToProps is wired up)
function validate(values){
  const errors = {};
  //Checks the recipients list to see if there are any errors - runs the validateEmails function, assigns whatever is returned to errors.emails, || '' pass in empty string on page load
  errors.emails = validateEmails(values.emails || '');
  //Adds a property to the errors[name] object containing a string - we use [name] when we reference something on the fly, errors[name] changes for each entry in the array so it will be errors.title then errors.subject etc.
  _.each(FIELDS, ({name}) => {
    //If there is no value  - when looking under the name (used as the key for the data in Redux Store)
    if(!values[name]){
      //Add a property to the errors object containing a string - Redux Form automatically passes this to the <Field /> with name="title" under meta.error
      errors[name] = 'You must provide a value';
    }
  });
  //Return errors (If applicable) - if a blank object is returned there are no issues and form submittal can go ahead
  return errors;
}

//Wires up reduxForm to the component - provides additonal props (similar to connect)
export default reduxForm({
    validate: validate,
    form: 'surveyForm'
})(SurveyForm);
