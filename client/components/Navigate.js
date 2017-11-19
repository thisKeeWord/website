import React from 'react';
import { Link } from 'react-router';
import { NavDropdown, MenuItem, Nav, NavItem } from 'react-bootstrap';

class Navigate extends React.Component {
  render() {
    const that = this;
    return (
      <div className="Explore">
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <Link to="/">Home</Link>
          <Link to="/fitness">Fitness</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/projects">Projects</Link>
        </NavDropdown>
        <Nav bsStyle="tabs" activeKey={location.pathname.split('/')[1]}>
          <NavItem id="navTabs" eventKey="" href="/">Home</NavItem>
          <NavItem id="navTabs" eventKey="fitness" href="/fitness">Fitness</NavItem>
          <NavItem id="navTabs" eventKey="blogs" href="/blogs">Blogs</NavItem>
          <NavItem id="navTabs" eventKey="projects" href="/projects">Portfolio</NavItem>
        </Nav>
      	
      </div>
    )
  }
};

module.exports = Navigate;


