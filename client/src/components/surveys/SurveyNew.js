import React, {Component} from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

//Toggles between SurveyNew & SurveyForm
class SurveyNew extends Component{
  //Initalises state for component
  constructor(props){
    super(props);
    this.state = { showFormReview: false}
  }
  //Logic that determines if to show form page or the survey page
  renderContent(){
    //If state.showFormReview === true then show review component
    if(this.state.showFormReview){
      return <SurveyFormReview onCancel={()=> this.setState({showFormReview: false})}/>;
    }
    //Show surveyform component and set state to true
    return <SurveyForm onSurveySubmit={() => this.setState({showFormReview: true})}/>;
  }

  render(){
    return(
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default SurveyNew;
