import React from 'react';
import $ from 'jquery';

class Results extends React.Component {

  escOptions(e) {
    e.preventDefault();
    console.log(e.target.value, 'logging edit save cancel')
  }

  render() {
    let editable = null, that = this;
    if (this.props.isLoggedIn) {
      editable = (
        // <form id="modifyContents" onSubmit={this.escOptions.bind(this)}>
          <div>
            <input className="delete" type="button" value="Delete" onClick={that.escOptions.bind(that)} />
            <input className="edit" type="button" value="Edit" onClick={that.escOptions.bind(that)} />
            <input className="save" type="button" value="Save" onClick={that.escOptions.bind(that)} /> 
            <input className="cancel" type="button" value="Cancel" onClick={that.escOptions.bind(that)} />
          </div>
        // </form>
      );
    }
    console.log('bro')
    const additions = this.props.resultsToAdd.map(data => 
      <div id={data._id} key={data._id}>
        {editable}
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


