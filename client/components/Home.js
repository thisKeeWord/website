import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
// import Navigate from './Navigate';
// import Footers from './Footers';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="aboutDescription">
          <div className="wassup">
            <h1 className="name">Leonard Kee</h1>
            <span className="personalDescription">Developer | Powerbuilder | Blogger</span>
          </div>
        </div>
        <ul className="homeLinks">
          <li className="quickLinks">
            <NavLink to="#/portfolio">Portfolio</NavLink>
          </li>
          <li className="quickLinks">
            <NavLink to="#/blog/fitness">Fitness</NavLink>
          </li>
          <li className="quickLinks">
            <NavLink to="#/blog">Blog</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

module.exports = Home;


