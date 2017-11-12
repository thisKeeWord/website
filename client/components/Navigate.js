import React from 'react';
import { Link } from 'react-router';
import { NavDropdown, MenuItem } from 'react-bootstrap';

class Nav extends React.Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		userLoggedIn: false
	// 	};
	// }

	// componentWillMount() {
		
	// }

 // <div id="menuToggle">
 //          <input type="checkbox" />
 //          <span></span>
 //          <span></span>
 //          <span></span>

  render() {
    let displayStyle = "none";
    let heading = null;
    if (location.pathname !== "/") {
      heading = (
        <div id="briefDescription">
          <span id="myName">LEONARD KEE</span>
          <sup id="adjectives">&nbsp; Developer | Powerbuilder | Blogger</sup>
        </div>
      )
    }
    return (
      <div className="Explore">
        {heading}
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <Link to="/">Home</Link>
          <Link to="/fitness">Fitness</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/projects">Projects</Link>
        </NavDropdown>
      	<ul id="linkToPages">
          <li id="goHome"><Link to="/">Home</Link></li>
          <li id="goFitness"><Link to="/fitness">Fitness</Link></li>
          <li id="goBlogs"> <Link to="/blogs">Blogs</Link></li>
          <li id="goProjects"><Link to="/projects">Projects</Link></li>
        </ul>
      </div>
    )
  }
};

module.exports = Nav;


