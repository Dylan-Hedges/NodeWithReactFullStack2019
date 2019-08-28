import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import  {connect} from 'react-redux';
import * as actions from '../actions';

//Component that displays Stripe Add Credits form after clicking add credits button in header
class Payments extends Component{
  render(){
    return(
      <StripeCheckout
        name="Feedback App"
        description="$5 for 5 email credits"
        amount={500}
        token={token => {this.props.handleToken(token)}}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn grey lighten-3 black-text">
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
