import React from 'react';
import $ from 'jquery';
import PostForm from './Form.js'

class Fitness extends React.Component {
  componentDidMount() {
    $.get('/fitness', (error, data) => {
      return console.log(data);
    })
  }

  render() {
    return (
      <div className='Fitness'>
        Fitness
        <PostForm />
      </div>
    );
  }
};

module.exports = Fitness;


