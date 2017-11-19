import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class Login extends React.Component {
  login(e) {
    e.preventDefault();
    var creds = {
      username: $("#username").val(),
      password: $("#password").val()
    };
    const that = this;
    return $.ajax({
      type: 'POST', 
      url: '/login', 
      data: JSON.stringify(creds), // stringyfy before passing
      dataType: 'json', // payload is json
      contentType : 'application/json',
      success: data => {
        that.props.logIn(data);
        $(".loginForm")[0].reset();
      }
    });
  }
  
  render() {
    return (
    	<div className="login">
        <form className="loginForm" onSubmit={this.login.bind(this)}>
          <input name="username" id="username" placeholder="username"></input>
          <input name="password" id="password" type="password" placeholder="password"></input>
          <input type='submit' value="login" />
        </form>
      </div>
    )
  }
};

module.exports = Login;