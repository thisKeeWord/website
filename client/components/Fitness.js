import React from 'react';
import $ from 'jquery';
import PostForm from './Form.js';
import Results from './Results.js';

class Fitness extends React.Component {
  constructor() {
    super();
    this.state = {
      entryCategory: '',
      resultsToAdd: []
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

  render() {
    console.log(this.state.resultsToAdd, 'yo')
    return (
      <div className='Fitness'>
        Fitness
        <PostForm entrySelection={this.state.entryCategory} updateCategory={this.updateCategory.bind(this)} addResultsToPage={this.addResults.bind(this)} />
        <Results resultsToAdd={this.state.resultsToAdd} />
      </div>
    );
  }
};

module.exports = Fitness;


