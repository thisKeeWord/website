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
    let activeTag = ["", "about", "fitness", "blog", "portfolio", "contact"].map((elem, index) => {
      let classActive = "inactive";
      let linkReference = elem.charAt(0).toUpperCase() + elem.slice(1);
      if (elem === "") {
        linkReference = "Home";
      }
      if (elem === urlPath) {
        classActive = "active";
      }
      if (elem === 'fitness') {
        return (
          <li key={index}>
            <Link className="altActive" aria-current={elem === urlPath} id={`navTabs${classActive}`} to="https://instagram.com/whatintheleo" target="_blank" key={index}>{linkReference}</Link>
          </li>
        )
      }
      if (elem === 'blog') {
        return (
          <li key={index}>
            <Link className="altActive" aria-current={elem === urlPath} id={`navTabs${classActive}`} to="https://medium.com/@leosjourney" target="_blank" key={index}>{linkReference}</Link>
          </li>
        )
      }
      return (
        <li key={index}>
          <Link className={classActive} aria-current={elem === urlPath} id={`navTabs${classActive}`} to={`/${elem}`} key={index}>{linkReference}</Link>
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
              <Link to="https://instagram.com/whatintheleo" target="_blank">Fitness</Link>
              <Link to="https://medium.com/@leosjourney" target="_blank">Blog</Link>
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


