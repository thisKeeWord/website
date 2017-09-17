import React from 'react';
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
      	Nav
      </div>
    )
  }
};

module.exports = Nav;


