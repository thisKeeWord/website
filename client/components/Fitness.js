import React from 'react';
import $ from 'jquery';
import PostForm from './Form.js';
import Results from './Results.js';

class Fitness extends React.Component {
  constructor() {
    super();
    this.state = {
      entryCategory: '',
      resultsToAdd: [],
      isLoggedIn: false
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

  render() {
    let addForm = null;
    if (this.state.isLoggedIn) addForm = <PostForm entrySelection={this.state.entryCategory} updateCategory={this.updateCategory.bind(this)} addResultsToPage={this.addResults.bind(this)} />
    return (
      <div className='Fitness'>
        Fitness
        {addForm}
        <Results resultsToAdd={this.state.resultsToAdd} />
      </div>
    );
  }
};

module.exports = Fitness;


