import React from 'react';
import { Link } from 'react-router';
import { NavDropdown, MenuItem, Nav, NavItem } from 'react-bootstrap';

class Navigate extends React.Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		activeTab: 1
	// 	};
	// }

	// componentWillMount() {
		
	// }

 // <div id="menuToggle">
 //          <input type="checkbox" />
 //          <span></span>
 //          <span></span>
 //          <span></span>

 // <ul id="linkToPages">
 //          <li id="goHome"><Link to="/">Home</Link></li>
 //          <li id="goFitness"><Link to="/fitness">Fitness</Link></li>
 //          <li id="goBlogs"> <Link to="/blogs">Blogs</Link></li>
 //          <li id="goProjects"><Link to="/projects">Projects</Link></li>
 //        </ul>
// <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
//         <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
//         <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
//         <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
//       </Nav>

  // componentWillMount() {
  //   this.setState({
  //     activeTab: location.pathname.split('/')[1]
  //   });
  // }

  render() {
    const that = this;
    // console.log(this.state.activeTab)
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


