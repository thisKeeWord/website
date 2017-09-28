import React from 'react';
import $ from 'jquery';
import PostForm from './Form.js'

class Fitness extends React.Component {
  constructor() {
    super();
    this.state = {
      entryCategory: '',
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

  componentDidMount() {
    $.get('/fitness', (error, data) => {
      return console.log(data);
    });
  }

  render() {
    return (
      <div className='Fitness'>
        Fitness
        <PostForm entrySelection={this.state.entryCategory} updateCategory={this.updateCategory.bind(this)}  />
      </div>
    );
  }
};

module.exports = Fitness;


