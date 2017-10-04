import React from 'react';
import $ from 'jquery';
import PostForm from './Form.js'

class Blogs extends React.Component {
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
    $.get('/blogs', (error, data) => {
      return console.log(data);
    });
  }

  render() {
    return (
      <div className='Blogs'>
        Blogs
        <PostForm entrySelection={this.state.entryCategory} updateCategory={this.updateCategory} />
      </div>
    );
  }
};

module.exports = Blogs;