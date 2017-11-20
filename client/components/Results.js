import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class Results extends React.Component {

  escOptions(e) {
    e.preventDefault();
    console.log($(e.target).parent().parent().siblings().children().children().children().children());
    let infoToModify = $(e.target).parent().parent().siblings().children().children().children().children();
    this.props.divAndEventChosen($(e.target).parent().parent().attr("id"), e.target.value, infoToModify);
  }

  handlePageClick(event) {
    event.preventDefault();
    this.props.setCurrentPage(Number(event.target.id));
  }

  previousPageSet(e) {
    e.preventDefault();
    if (this.props.currentBasePage - 4 > 1) {
      this.props.previousPage();
    }
  }

  nextPageSet(e) {
    e.preventDefault();
    if (this.props.currentBasePage + 4 < Math.ceil(this.props.resultsToAdd.length / this.props.resultsPerPage)) {
      this.props.nextPage();
    }
  }

  render() {
    const indexOfLastResult = this.props.currentPage * this.props.resultsPerPage,
          indexOfFirstResult = indexOfLastResult - this.props.resultsPerPage,
          viewPage = this.props.resultsToAdd.slice(indexOfFirstResult, indexOfLastResult);
    let editable = null, editableContent = null, that = this;
    if (this.props.isLoggedIn) {
      editable = (
        <div>
          <input className="delete" type="button" value="Delete" onClick={that.escOptions.bind(that)} />
          <input className="edit" type="button" value="Edit" onClick={that.escOptions.bind(that)} />
          <input className="save" type="button" value="Save" onClick={that.escOptions.bind(that)} /> 
          <input className="cancel" type="button" value="Cancel" onClick={that.escOptions.bind(that)} />
        </div>
      );
    }

    const renderPageResults = viewPage.map(data => {
      let mediaFile = null;
      if (data.file[0]) {
        mediaFile = (
          <img className="images" src={data.file[0]} />
        );
      }
      if (data._id === this.props.divId && this.props.eventSelection === "Edit") {
        editableContent = true;
        return (
          <div className="linkWithButtons">
            <ul id="postNavigation">
              <li id="clickLinks">
                <div className={data.category + 1} id={data._id} key={data._id}>
                  <div className="perPost">
                    <h1 className="postResults" id="titleOfWriting" contentEditable={editableContent} dangerouslySetInnerHTML={{ __html: data.title }}></h1>
                    <div className="dateBodyImage">
                      <h4 className="postResults" id="datePosted">{(new Date(data.date)).toLocaleString()}</h4>
                      {mediaFile}
                      <pre className="postResults" id="postBody" contentEditable={editableContent} dangerouslySetInnerHTML={{ __html: data.body }} ></pre>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div id={data._id} className="buttons">
              {editable}
            </div>
            <span id="bordering"></span>
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
          <ul id="postNavigation">
            <li id="clickLinks">
              <div className={data.category + 1} id={data._id} key={data._id}>
                <div className="perPost">
                  <h1 className="postResults" id="titleOfWriting" contentEditable={editableContent} dangerouslySetInnerHTML={{ __html: data.title }}></h1>
                  <div className="dateBodyImage">
                    <h4 className="postResults" id="datePosted">{(new Date(data.date)).toLocaleString()}</h4>
                    {mediaFile}
                    <pre className="postResults" contentEditable={editableContent} dangerouslySetInnerHTML={{ __html: data.body }}></pre>
                  </div>
                </div>
              </div>
              <Link id="linkToPost" to={`/${that.props.entryCategory}/${data.title.replace(" ", "-")}`}>
                Read More
              </Link>
            </li>
          </ul>
          <div id={data._id} className="buttons">
            {editable}
          </div>
          <span id="bordering"></span>
        </div>
      );
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.resultsToAdd.length / this.props.resultsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li className="page" key={number} id={number} onClick={this.handlePageClick.bind(this)}>{number}</li>
      );
    });

    return (
      <div className='Results'>
        <div className="resultsByPage">
          {renderPageResults}
        </div>
        <ul id="pageNum">
          <li className="page" key="previous" id="previous" onClick={this.previousPageSet.bind(this)}>&laquo;</li>
          {renderPageNumbers.slice(this.props.currentBasePage - 1, 5)}
          <li className="page" key="next" id="next" onClick={this.nextPageSet.bind(this)}>&raquo;</li>
        </ul>
      </div>
    );
  }
};

module.exports = Results;


