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
        <div className="aboutMe">
          <div className="myImage"></div>
          <div className="aboutDescription">
            <div className="nameAndDescription">
              <h1 className="name">Leonard Kee</h1>
              <span className="personalDescription">Developer, Powerbuilder, Blogger</span>
            </div>
          </div>
        </div>
        <Nav />
      </div>
    )
  }
};

module.exports = About;


