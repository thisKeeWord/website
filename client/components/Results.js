import React from 'react';
import $ from 'jquery';

class Results extends React.Component {

  render() {
    console.log('bro')
    const additions = this.props.resultsToAdd.map(data => 
      <div id={data._id} key={data._id}>
        <div id={data.fitness + "1"}>
          <h1 id="titleOfWriting">{data.title}</h1>
          <h3 id="datePosted">{data.date}</h3>
          <p>{data.body}</p>
        </div>
      </div>
    );
    return (
      <div className='Results'>
        {additions}
      </div>
    );
  }
};

module.exports = Results;


