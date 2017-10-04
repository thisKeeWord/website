import React from 'react';
import { Link } from 'react-router';
import Fitness from './Fitness';
import Blogs from './Blogs';
import Projects from './Projects';
// import Misc from './Misc';

class Nav extends React.Component {
	constructor() {
		super();
		this.state = {
			userLoggedIn: false
		};
	}

	// componentWillMount() {
		
	// }

  render() {
    return (
      <div className="Nav">
      	<ul className="linkToPages">
          <li id="goFitness"><Link to="/fitness">Fitness</Link></li>
          <li id="goBlogs"><Link to="/blogs">Blogs</Link></li>
          <li id="goProjects"><Link to="/projects">Projects</Link></li>
        </ul>
      </div>
    )
  }
};

module.exports = Nav;


