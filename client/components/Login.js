import React from 'react';
import { Link } from 'react-router';
        // <Link to="/">Home</Link>

class Login extends React.Component {
  login(e) {
    const that = this;
    return $.ajax({
      type: 'POST', 
      url: '/login', 
      data: JSON.stringify(e.target.value), // stringyfy before passing
      dataType: 'json', // payload is json
      contentType : 'application/json',
      success: data => {
        that.props.logIn(data)
      }
    });
  }
  
  render() {
    return (
    	<div className="login">
        <form onSubmit={this.login.bind(this)}>
          <input name="username" placeholder="username"></input>
          <input name="password" placeholder="password"></input>
          <input type='submit' value="login" />
        </form>

      </div>
    )
  }
};

module.exports = Login;