import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class Results extends React.Component {

  escOptions(e) {
    e.preventDefault();
    let infoToModify = $(e.target).parent().parent().siblings().children().children().children().children();
    // if (e.target.value === "let objModified = {
    //   title: infoToModify[0].text(),
    //   body: infoToModify[2].text()
    // };
    console.log(e.target.value, e, e.id, $(e.target).parent().parent().attr("id"), $(e.target).parent().parent().siblings().children().children().children().children(), 'logging edit save cancel')
    this.props.divAndEventChosen($(e.target).parent().parent().attr("id"), e.target.value, infoToModify);
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
      let mediaFile = null;
      if (data.file) {
        console.log(data, 'filedata')
        mediaFile = (
          <img src={data.file} />
        );
      }
      console.log(this.props.eventSelection)
      if (data._id === this.props.divId && this.props.eventSelection === "Edit") {
        editableContent = true;
        return (
          <div className="linkWithButtons">
            <ul className="postNavigation">
              <li className="clickLinks">
                <div className={data.category + 1} id={data._id} key={data._id}>
                  <div className="perPost">
                    <div className="perPostText">
                      <h1 className="postResults" id="titleOfWriting" contentEditable={editableContent}>{data.title}</h1>
                      <h3 className="postResults" id="datePosted">{data.date}</h3>
                      <p className="postResults" id="postBody" contentEditable={editableContent}>{data.body}</p>
                    </div>
                    {mediaFile}
                  </div>
                </div>
              </li>
            </ul>
            <div id={data._id} className="buttons">
              {editable}
            </div>
          </div>
        )
      }
      else if (data._id === this.props.divId && this.props.eventSelection === "Cancel") {
        editableContent = false;
      }
      else {
        editableContent = false;
      }

      return (
        <div className="linkWithButtons">
          <ul className="postNavigation">
            <li className="clickLinks">
              <Link to={`/fitness/${data._id}`}>
                <div className={data.category + 1} id={data._id} key={data._id}>
                  <div className="perPost">
                    <div className="perPostText">
                      <h1 className="postResults" id="titleOfWriting" contentEditable={editableContent}>{data.title}</h1>
                      <h3 className="postResults" id="datePosted">{data.date}</h3>
                      <p className="postResults" contentEditable={editableContent}>{data.body}</p>
                    </div>
                    {mediaFile}
                  </div>
                </div>
              </Link>
            </li>
          </ul>
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


