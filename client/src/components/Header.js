import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments.js';

//Displays header/nav bar along the top of the page
class Header extends Component{
  //Displays login or logout button
  renderContent(){
    //Switch statement that determines what to do if user is loading, needs to login or logout
    switch(this.props.auth) {
      //Loading - Show nothing
      case null:
        return;
      //Not logged in
      case false:
        return(
          <li><a href="/auth/google"><i className="material-icons">account_circle</i>Login</a></li>
        );
      //Logged in
      default:
        return [
          <li key="1"><Payments /></li>,
          <li key="2" style={{margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
          <li key="3"><a href="/api/logout">Logout</a></li>
        ];
    }
  }
  //Displays navbar on screen
  render(){
    return(
      <nav id="navbar">
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} id="logo">
            <i className="material-icons">mail_outline</i>
            SurveySend
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

//Maps Redux store to props of this component - state.auth is defined in reducers index.js
function mapStateToProps(state){
  // console.log(state)
  return { auth: state.auth};
}

//Wires up Redux Store to this component
export default connect(mapStateToProps)(Header);
