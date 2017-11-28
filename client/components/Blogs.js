import React from 'react';
import { Link } from 'react-router';
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
    this.state = {};
  }

  render() {
    let addForm = null;
    if (this.state.isLoggedIn) addForm = <PostForm entrySelection={this.state.entryCategory} updateCategory={this.updateCategory.bind(this)} addResultsToPage={this.addResults.bind(this)} grabImageData={this.updateImageData.bind(this)} imageInfo={this.state.imageData} />
    return (
      <div className='Blogs'>
        <div className="heading">
          <Navigate />
        </div>
        <Loading isActive={this.state.isActiveLoader} />
        <div className="loadingFinished" style={{"visibility": this.state.loadedItems}}>
          {addForm}
          <Results resultsToAdd={this.state.resultsToAdd} isLoggedIn={this.state.isLoggedIn} divId={this.state.id} eventSelection={this.state.selection} divAndEventChosen={this.divAndEventChosen.bind(this)} entryCategory={this.state.entryCategory} currentPage={this.state.currentPage} resultsPerPage={this.state.resultsPerPage} setCurrentPage={this.setCurrentPage.bind(this)} currentBasePage={this.state.currentBasePage} previousPage={this.previousPage.bind(this)} nextPage={this.nextPage.bind(this)} />
          <Login isLoggedIn={this.state.isLoggedIn} logIn={this.login.bind(this)} />
        </div>
        <Footers />
      </div>
    );
  }
};

module.exports = Blogs;


