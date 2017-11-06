import React from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
// import Misc from './Misc';

class Home extends React.Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		userLoggedIn: false
	// 	};
	// }

	// componentWillMount() {
		
	// }

  render() {
    return (
      <div className="Home">
        <Nav />
      </div>
    )
  }
};

module.exports = Home;


