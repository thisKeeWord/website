import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import PostForm from './Form.js';
import Results from './Results.js';
import Fitness from './Fitness.js';
import Login from './Login.js';

class Blogs extends React.Component {
  constructor() {
    super();
    this.state = {
      entryCategory: 'blogs',
      resultsToAdd: [],
      isLoggedIn: false,
      id: '',
      selection: '',
      imageData: ''
      // title: ''
    };
  }

  updateCategory(selection) {
    console.log(selection)
    this.setState({
      entryCategory: selection
    });
  }

  addResults(data) {
    this.setState({
      resultsToAdd: data
    });
  }

  divAndEventChosen(id, selection, infoToModify) {
    const that = this;
    let objModified = {};
    console.log(infoToModify)
    if (selection === "Save") {
      objModified = {
        id: id,
        title: $(infoToModify)[0].innerText,
        body: $($(infoToModify[1]).children().children())[1].innerText,
        category: window.location.pathname.replace('/', ''),
      };
      this.updateRecord('PUT', objModified).done(results => {
        console.log(results)
        that.setState({
          id: id,
          selection: selection,
          resultsToAdd: results
        },
        console.log(infoToModify, objModified));
      });
    }
    else if (selection === "Delete") {
      objModified = {
        id: id,
        category: window.location.pathname.replace('/', ''),
      };
      this.updateRecord('DELETE', objModified).done(results => {
        console.log(results)
        that.setState({
          id: id,
          selection: selection,
          resultsToAdd: results
        },
        console.log(infoToModify, objModified));
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
    console.log(window.location.pathname);
    let that = this;
    return $.ajax({
      type: 'POST', 
      url: '/fack', 
      data: JSON.stringify({ category: window.location.pathname.replace('/', '')}), // stringyfy before passing
      dataType: 'json', // payload is json
      contentType : 'application/json',
      success: data => {
        that.addResults(data.reverse());
      }
    });
    // $.post('/fack', { category: window.location.pathname.replace('/', '')}, data => {
    //   console.log(data);
    // });
  }

  login(loggingIn) {
    this.setState({
      isLoggedIn: true
    });
  }

  updateImageData(dataImage) {
    this.setState({
      imageData: dataImage
    });
  }

  render() {
    let addForm = null;
    console.log(this.state.isLoggedIn)
    if (this.state.isLoggedIn) addForm = <PostForm entrySelection={this.state.entryCategory} updateCategory={this.updateCategory.bind(this)} addResultsToPage={this.addResults.bind(this)} grabImageData={this.updateImageData.bind(this)} imageInfo={this.state.imageData} />
    return (
      <div className='Blogs'>
        Blogs
        <ul className="navigationLinks">
          <li className="navi">
            <Link to='/'>Home</Link>
            <Link to='/fitness'>Fitness</Link>
            <Link to='/projects'>Projects</Link>
          </li>
        </ul>
        {addForm}
        <Results resultsToAdd={this.state.resultsToAdd} isLoggedIn={this.state.isLoggedIn} divId={this.state.id} eventSelection={this.state.selection} divAndEventChosen={this.divAndEventChosen.bind(this)} entryCategory={this.state.entryCategory} />
        <Login isLoggedIn={this.state.isLoggedIn} logIn={this.login.bind(this)} />
      </div>
    );
  }
};

module.exports = Blogs;


