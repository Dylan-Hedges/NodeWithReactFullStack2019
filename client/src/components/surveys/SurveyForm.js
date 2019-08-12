import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';

//Form that user can input data into
class SurveyForm extends Component{
  renderFields(){
    return(
      <div>
        <Field label="Survey Title" type="text" name="title" component={SurveyField} />
        <Field label="Subject Line" type="text" name="subject" component={SurveyField} />
        <Field label="Email Body" type="text" name="body" component={SurveyField} />
        <Field label="Recipient List" type="text" name="emails" component={SurveyField} />
      </div>
    );
  }
  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

//Wires up reduxForm helper to the component as additonal props (similar to connect)
export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);
