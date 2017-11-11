import React from 'react';
import { Link } from 'react-router';
// import Misc from './Misc';

class Nav extends React.Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		userLoggedIn: false
	// 	};
	// }

	// componentWillMount() {
		
	// }

  render() {
    return (
      <div className="Explore">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        	<ul id="linkToPages">
            <li id="goHome"><Link to="/">Home</Link></li>
            <li id="goFitness"><Link to="/fitness">Fitness</Link></li>
            <li id="goBlogs"><Link to="/blogs">Blogs</Link></li>
            <li id="goProjects"><Link to="/projects">Projects</Link></li>
          </ul>
        </div>
      </div>
    )
  }
};

module.exports = Nav;


