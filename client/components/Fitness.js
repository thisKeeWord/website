import React from 'react';
import $ from 'jquery';
import PostForm from './Form.js'

class Fitness extends React.Component {
  constructor() {
    super();
    this.state = {
      entryCategory: ''
    };
  }

  updateCategory(selection) {
    this.setState({
      entryCategory: selection
    });
  }

  componentDidMount() {
    $.get('/fitness', (error, data) => {
      return console.log(data);
    });
  }

  render() {
    return (
      <div className='Fitness'>
        Fitness
        <PostForm entrySelection={this.state.entryCategory} updateCategory={this.updateCategory.bind(this)} />
      </div>
    );
  }
};

module.exports = Fitness;


