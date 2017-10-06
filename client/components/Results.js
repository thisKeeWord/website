import React from 'react';
import $ from 'jquery';

class Results extends React.Component {

  escOptions(e) {
    e.preventDefault();
    console.log(e.target.value, e, e.id, $(e.target).parent().parent().attr("id"), 'logging edit save cancel')
    this.props.divAndEventChosen($(e.target).parent().parent().attr("id"), e.target.value);
  }

  render() {
    let editable = null, editableContent = null, that = this;
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
    const additions = this.props.resultsToAdd.map(data => {
      console.log(this.props.eventSelection)
      if (data._id === this.props.divId && this.props.eventSelection === "Edit") {
        editableContent = true;
      }
      else {
        editableContent = false;
      }
      return (
        <div id={data._id} key={data._id}>
          <div id={data.category + "1"}>
            <h1 id="titleOfWriting" contentEditable={editableContent}>{data.title}</h1>
            <h3 id="datePosted" contentEditable={editableContent}>{data.date}</h3>
            <p contentEditable={editableContent}>{data.body}</p>
          </div>
          <div id={data._id} className="buttons">
            {editable}
          </div>
        </div>
      );
    });
    return (
      <div className='Results'>
        {additions}
      </div>
    );
  }
};

module.exports = Results;


