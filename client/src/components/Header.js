import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments.js';

//Displays header/nav bar along the top of the page
class Header extends Component{
  //Displays login or logout button
  renderContent(){
    switch(this.props.auth) {
      //Loading - Show nothing
      case null:
        return;
      //Not logged in
      case false:
        return(
          <li><a href="/auth/google">Login With Google</a></li>
        );
      //Logged in
      default:
        return [
          <li key="1"><Payments /></li>,
          <li key="2"><a href="/api/logout">Logout</a></li>
        ];
    }
  }

  render(){
    return(
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo">
            Emaily
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

//Maps Redux store to Props - state.auth is defined in reducers index.js
function mapStateToProps(state){
  console.log(state)
  return { auth: state.auth};
}

//Wires up Redux Store to component
export default connect(mapStateToProps)(Header);
