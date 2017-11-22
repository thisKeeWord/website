import React from 'react';
import { Link } from 'react-router';
import { NavDropdown, MenuItem, Nav, NavItem } from 'react-bootstrap';

class Navigate extends React.Component {
  render() {
    const that = this;
    return (
      <div className="Explore">
        <div className="viewDropdown">
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <li className="menuLinks">
              <Link to="/">Home</Link>
              <Link to="/fitness">Fitness</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/projects">Projects</Link>
            </li>
          </NavDropdown>
        </div>

        <Nav bsStyle="tabs" activeKey={location.pathname.split('/')[1]}>
          <NavItem id="navTabs" eventKey="" href="/">Home</NavItem>
          <NavItem id="navTabs" eventKey="fitness" href="/fitness">Fitness</NavItem>
          <NavItem id="navTabs" eventKey="blogs" href="/blogs">Blogs</NavItem>
          <NavItem id="navTabs" eventKey="projects" href="/projects">Portfolio</NavItem>
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


