import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import Navigate from './Navigate';
import Footers from './Footers';

class About extends React.Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		userLoggedIn: false
	// 	};
	// }

	// componentWillMount() {
		
	// }
        // <Col lg={12} bsClass="noPad">

  render() {
    return (
      <div className="About">
        <Navigate />
        <div className="aboutMe">
          <div className="myImage">
            <img className="headImage" src="./../images/profile-image.png"></img>
          </div>
          <div className="aboutDescription">
            <div className="nameAndDescription">
              <h1 className="name">Leonard Kee</h1>
              <span className="personalDescription">Developer | Powerbuilder | Blogger</span>
              <div className="icons">
                <a href="https://www.linkedin.com/in/thiskeeword" target="_blank">
                  <i className="fa fa-linkedin fa-2x" id="iconLink"></i>
                </a>
                <a href="https://www.github.com/thisKeeWord" target="_blank">
                  <i className="fa fa-github fa-2x" id="iconLink"></i>
                </a>
                <a href="https://instagram.com/whatintheleo" target="_blank">
                  <i className="fa fa-instagram fa-2x" id="iconLink"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

module.exports = About;


