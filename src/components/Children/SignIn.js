import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const modalStyle = {
  inputStyle: {
    width: '100%',
  },

  btnStyle: {
  labelPosition: 'after',
  backgroundColor: 'tomato',
  height: 60,
  width: '100%',
  }
};


export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.closeSignIn = this.closeSignIn.bind(this);
  }
  closeSignIn = () => {
    console.log('clicking close in signIn')
    this.props.handleClick("null");
  }

  render() {
    console.log('signIn: ',this.props.CurrentModal)
    console.log("signIn prop ",this.props)

    return (
      <div className="modalForm">
        <div className="modalContent">
          <span 
            onClick = { this.closeSignIn }
            className = "xClose">&times;</span>
            
          <div className="welcome">
            <h1>Welcome to Sugr</h1>
          </div>

          <div className="errHandle">
            <span id="error"></span>
          </div>

        <div className="inputWrapper">                <form>
          <TextField 
            name="email"
            hintText="email"
            floatingLabelText="Email"
            style={ modalStyle.inputStyle }
            onChange = { (ev) => {this.props.inputChange(ev.currentTarget.value, 'email')}} 
          />

          <TextField 
            name="password"
            hintText="password"
            floatingLabelText="Password"
            style={ modalStyle.inputStyle }
            onChange = { (ev) => {this.props.inputChange(ev.currentTarget.value, 'email')}} 
          />
          </form>
        </div>

          <FlatButton 
            label="Sign In" 
            style={ modalStyle.btnStyle } />

          <div className="dividerOr">or</div>

          <FlatButton 
            label="Sign me up"  
            style={ modalStyle.btnStyle } />
        </div>
      </div>
    );
  }
}
