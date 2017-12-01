import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import PostForm from './Form';
import Results from './Results';
import Blogs from './Blogs';
import Login from './Login';
import Loading from './Loading';
import Navigate from './Navigate';
import Footers from './Footers';

class BlogCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      entryCategory: 'blogs',
      resultsToAdd: [],
      isLoggedIn: false,
      id: '',
      selection: '',
      imageData: [],
      isActiveLoader: true,
      loadedItems: 'hidden',
      currentPage: 1,
      resultsPerPage: 7,
      currentBasePage: 1
    };
  }

  updateCategory(selection) {
    this.setState({
      entryCategory: selection
    });
  }

  addResults(data) {
    const that = this;
    setTimeout(() => {
      that.setState({
        resultsToAdd: data,
        isActiveLoader: false,
        loadedItems: 'visible'
      });
    }, 1500);
  }

  divAndEventChosen(id, selection, infoToModify) {
    const that = this;
    let objModified = {};
    if (selection === "Save") {
      objModified = {
        id: id,
        title: $(infoToModify)[0].innerHTML,
        body: $($(infoToModify[1]).children().children())[1].innerHTML,
        category: window.location.pathname.split('/')[2],
      };
      this.updateRecord('PUT', objModified).done(results => {
        that.setState({
          id: id,
          selection: selection,
          resultsToAdd: results.reverse()
        });
      });
    }
    else if (selection === "Delete") {
      objModified = {
        id: id,
        category: window.location.pathname.split('/')[2],
      };
      this.updateRecord('DELETE', objModified).done(results => {
        that.setState({
          id: id,
          selection: selection,
          resultsToAdd: results.reverse()
        });
      });
    }
    else {
      that.setState({
        id: id,
        selection: selection
      });
    }
  }

  updateRecord(mod, record) {
    return $.ajax({
      type: mod, 
      url: '/update', 
      data: JSON.stringify(record), // stringyfy before passing
      dataType: 'json', // payload is json
      contentType : 'application/json',
    });
  }

  componentDidMount() {
    let that = this;
    return $.ajax({
      type: 'POST', 
      url: '/fack', 
      data: JSON.stringify({ category: window.location.pathname.split('/')[2]}), // stringyfy before passing
      dataType: 'json', // payload is json
      contentType : 'application/json',
      success: data => {
        that.addResults(data.reverse());
      }
    });
  }

  login(loggingIn) {
    this.setState({
      isLoggedIn: true
    });
  }

  updateImageData(dataImage) {
    let imageArray = this.state.imageData;
    imageArray.push(dataImage);
    this.setState({
      imageData: imageArray
    });
  }

  setCurrentPage(currentPage) {
    this.setState({
      currentPage: currentPage
    });
  }

  previousPage() {
    let adjustPageSet = this.state.currentPage - 4;
    this.setState({
      currentPage: adjustPageSet,
      currentBasePage: adjustPageSet
    });
  }

  nextPage() {
    let adjustPageSet = this.state.currentPage + 4;
    this.setState({
      currentPage: adjustPageSet,
      currentBasePage: adjustPageSet
    });
  }

  render() {
    let addForm = null;
    if (this.state.isLoggedIn) {
      addForm = <PostForm entrySelection={this.state.entryCategory} updateCategory={this.updateCategory.bind(this)} addResultsToPage={this.addResults.bind(this)} grabImageData={this.updateImageData.bind(this)} imageInfo={this.state.imageData} />
    }
    return (
      <div className='BlogCategory'>
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

module.exports = BlogCategory;

