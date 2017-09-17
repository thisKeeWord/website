import React from 'react';
import { Link } from 'react-router';

class Login extends React.Component {
  login(e) {
    this.props.login(e);
  }
  
  render() {
    return (
    	<div className="login">
        <form onSubmit={this.login.bind(this)}>
          <input name="username" placeholder="username"></input>
          <input name="password" placeholder="password"></input>
          <input type='submit' value="login" />
        </form>
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
      </div>
    )
  }
};

module.exports = Login;