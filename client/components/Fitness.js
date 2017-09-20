import React from 'react';
import $ from 'jquery';

class Fitness extends React.Component {
  componentDidMount() {
    $.post('/fitness', {}, (error, data) => {
      return console.log(data);
    })
  }

  render() {
    return (
      <div className='Fitness'>
        Fitness
      </div>
    );
  }
};

module.exports = Fitness;


