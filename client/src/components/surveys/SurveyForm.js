import _ from 'lodash';
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import SurveyField from './SurveyField';

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

//Wires up reduxForm helper to the component as additonal props (similar to connect)
export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);
