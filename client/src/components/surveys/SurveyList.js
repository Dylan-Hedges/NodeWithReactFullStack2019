import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

//Component that displays all surveys user has created on screen
class SurveyList extends Component {
  //Grabs the list of surveys on component load - executes the AC using component lifecycle method
  componentDidMount(){
    this.props.fetchSurveys();
  }
  //Renders the surveys on screen - maps over the surveys prop (list of surveys) and generates JSX for each survey
  renderSurveys(){
    return this.props.surveys.reverse().map(survey => {
      return(
        <div id="surveylist" className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title surveytitle">{survey.title}</span>
            <p>{survey.subject}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a className="green-text">Yes:<span className="response">{survey.yes}</span></a>
            <a className="green-text">No:<span className="response">{survey.no}</span></a>
            <button className="red darken-1 btn-flat white-text" onClick={() => this.props.deleteSurvey({surveyid:survey._id})}>Delete</button>
          </div>
        </div>
      )
    });
  }
  //Executes the renderSurveys function
  render(){
    return(
      <div>
          {this.renderSurveys()}
      </div>
    );
  }
}

//Maps the list of surveys from Redux Store to the props of this component
function mapStateToProps(state){
  return {surveys: state.surveys};
}

//Wires up Redux Store and AC to this component
export default connect(mapStateToProps, actions)(SurveyList);
