import React from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
// import Misc from './Misc';

class About extends React.Component {
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
      <div className="About">
        <Nav />
        About
      </div>
    )
  }
};

module.exports = About;


