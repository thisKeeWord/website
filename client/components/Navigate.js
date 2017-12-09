import React from 'react';
// import { Link } from 'react-router';
import { NavDropdown, MenuItem, Nav, NavItem } from 'react-bootstrap';
import { Link, Route, NavLink, HashRouter } from 'react-router-dom';

// <NavItem id="navTabs" eventKey="">
// <NavItem id="navTabs" eventKey="fitness">
// <NavItem id="navTabs" eventKey="blogs">
// <NavItem id="navTabs" eventKey="portfolio">

class Navigate extends React.Component {
  render() {
    const that = this;
    let urlPath = location.pathname.split('/')[1];
    if (location.pathname.split('/')[2] === "fitness") {
      urlPath = "fitness";
    }
    let activeTag = ["", "about", "fitness", "blog", "portfolio", "contact"].map(elem => {
      let classActive = "inactive";
      let linkReference = elem.charAt(0).toUpperCase() + elem.slice(1);
      if (elem === "") {
        linkReference = "Home";
      }
      if (elem === urlPath) {
        classActive = "active";
      }
      if (elem === 'fitness') {
        elem = 'blog/fitness'
      }
      return (
        <li>
          <Link className={classActive} aria-current={elem === urlPath} id={"navTabs" + " " + classActive} to={"/" + elem}>{linkReference}</Link>
        </li>
      )
    });

    return (
      <div className="Explore">
        <div className="viewDropdown">
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <li className="menuLinks">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/blog/fitness">Fitness</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contact</Link>
            </li>
          </NavDropdown>
        </div>

        <Nav bsStyle="tabs">
          {activeTag}
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


