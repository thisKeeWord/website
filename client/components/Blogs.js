import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import PostForm from './Form';
import Results from './Results';
import BlogCategory from './BlogCategory';
import Login from './Login';
import Loading from './Loading';
// import Navigate from './Navigate';
// import Footers from './Footers';


class Blogs extends React.Component {
  constructor() {
    super();
    this.state = {
      currentLink: location.pathname.split('/')
    };
  }

  // get recent posts from categories and display

  render() {
    let addForm = null;
    if (this.state.isLoggedIn) addForm = <PostForm entrySelection={this.state.entryCategory} updateCategory={this.updateCategory.bind(this)} addResultsToPage={this.addResults.bind(this)} grabImageData={this.updateImageData.bind(this)} imageInfo={this.state.imageData} />
    return (
      <div className='Blogs'>
        <ul className='blogLinks'>
          <li className="indivLinks">
            <Link to='/blog/fitness'>Fitness</Link>
          </li>
          <li className="indivLinks">
            <Link to='/blog/food'>Food</Link>
          </li>
          <li className="indivLinks">
            <Link to='/blog/lifestyle'>Lifestyle</Link>
          </li>
          <li className="indivLinks">
            <Link to='/blog/personal'>Personal</Link>
          </li>
          <li className="indivLinks">
            <Link to='/blog/tech'>Tech</Link>
          </li>
          <li className="indivLinks">
            <Link to='/blog/travel'>Travel</Link>
          </li>
        </ul>
        <BlogCategory />
      </div>
    );
  }
};

module.exports = Blogs;


