import React from 'react';
// import { Link } from 'react-router';
import { NavDropdown, MenuItem, Nav, NavItem } from 'react-bootstrap';
import { Link, Route, NavLink, HashRouter } from 'react-router-dom';


class Navigate extends React.Component {
  render() {
    const that = this;
    console.log(location.pathname.split('/'))
    console.log(location.pathname)
    return (
      <div className="Explore">
        <div className="viewDropdown">
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <li className="menuLinks">
              <Link exact to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/fitness">Fitness</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contact</Link>
            </li>
          </NavDropdown>
        </div>

        <Nav bsStyle="tabs" activeKey={location.pathname.split('/')[1]}>
          <NavItem id="navTabs" eventKey=""><NavLink to="/">Home</NavLink></NavItem>
          <NavItem id="navTabs" eventKey="fitness"><NavLink to="/fitness">Fitness</NavLink></NavItem>
          <NavItem id="navTabs" eventKey="blogs"><NavLink to="/blogs">Blogs</NavLink></NavItem>
          <NavItem id="navTabs" eventKey="portfolio"><NavLink to="/portfolio">Portfolio</NavLink></NavItem>
        </Nav>
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
    )
  }
};

module.exports = Navigate;


