import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import Navigate from './Navigate';
import Footers from './Footers';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Navigate />
        <div className="aboutDescription">
          <h1 className="name">Leonard Kee</h1>
          <span className="personalDescription">Developer | Powerbuilder | Blogger</span>
        </div>
        <ul className="homeLinks">
          <li className="quickLinks">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="quickLinks">
            <Link to="/blog/fitness">Fitness</Link>
          </li>
          <li className="quickLinks">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <Footers />
      </div>
    )
  }
}


