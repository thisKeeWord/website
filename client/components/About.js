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
        <div className="whatIDo">
            "Wake up determined. Go to bed satisfied. And somewhere in between eat a cookie.." - Dwayne Johnson
            <br/>
            <br/>
            There are people that might not like Rocky himself, but the quote hits the mark and his drive to be the best.
            <br/>
            <br/>
            I pursued mathematics in college, started lifting weights and still do to this day, played my share of videogames and watched many tv shows and movies,
            and even considered training to become a professional League of Legends player.
            <br/>
            <br/>
            During my pursuit of different possible avenues, I found coding to be more interesting.
            Furthermore, as one who ponders and thinks a decent amount, blogging allows me to share the knowledge
            I have gained over the years with others.
            <br/>
            <br/>
            As I continue to pursue my dreams - though those dreams my change over time - the one thing I won't stop
            doing is 1-up'ing myself. 
            <br/>
            <br/>
            <br/>
            <br/>
            "I fight for a better tomorrow." - Jayce (League of Legends)
            <br/>
            "Hardly a challenge." - Illidan Stormrage (Warcraft III)
          </div>
        <Footers />
      </div>
    )
  }
};

module.exports = About;


