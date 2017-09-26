import React from 'react';
import $ from 'jquery';
import PostForm from './Form.js'

class Projects extends React.Component {
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
    $.get('/projects', (error, data) => {
      return console.log(data);
    });
  }

  render() {
    return (
      <div className='Projects'>
        Projects
        <PostForm entrySelection={this.state.entryCategory} updateCategory={this.updateCategory} />
      </div>
    );
  }
};

module.exports = Projects;