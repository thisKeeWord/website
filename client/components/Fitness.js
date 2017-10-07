import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import PostForm from './Form.js';
import Results from './Results.js';
import Login from './Login.js';

class Fitness extends React.Component {
  constructor() {
    super();
    this.state = {
      entryCategory: '',
      resultsToAdd: [],
      isLoggedIn: false,
      id: '',
      selection: ''
      // title: ''
    };
  }

  updateCategory(selection) {
    console.log(selection)
    this.setState({
      entryCategory: selection
    });
  }

  // updateTitle(title) {
  //   console.log(title)
  //   this.setState({
  //     title: title
  //   });
  // }

  // componentDidMount() {
  //   $.get('/data', (error, data) => {
  //     return console.log(data);
  //   });
  // }

  addResults(data) {
    this.setState({
      resultsToAdd: data
    });
  }

  divAndEventChosen(id, selection, infoToModify) {
    // do put request here for modification
    let objModified = {};
    if (selection === "Save") {
      //fix this
      objModified = {
        title: infoToModify[0].text(),
        body: infoToModify[2].text()
      };
    }
    this.setState({
      id: id,
      selection: selection
    },
    console.log(infoToModify));
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
        that.addResults(data);
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

  render() {
    let addForm = null;
    console.log(this.state.isLoggedIn)
    if (this.state.isLoggedIn) addForm = <PostForm entrySelection={this.state.entryCategory} updateCategory={this.updateCategory.bind(this)} addResultsToPage={this.addResults.bind(this)} />
    return (
      <div className='Fitness'>
        Fitness
        {addForm}
        <Results resultsToAdd={this.state.resultsToAdd} isLoggedIn={this.state.isLoggedIn} divId={this.state.id} eventSelection={this.state.selection} divAndEventChosen={this.divAndEventChosen.bind(this)} />
        <Login isLoggedIn={this.state.isLoggedIn} logIn={this.login.bind(this)} />
      </div>
    );
  }
};

module.exports = Fitness;


