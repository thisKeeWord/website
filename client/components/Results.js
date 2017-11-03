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
    // console.log(e.target.value, e, e.id, $(e.target).parent().parent().attr("id"), $(e.target).parent().parent().siblings().children().children().children().children(), 'logging edit save cancel')
    this.props.divAndEventChosen($(e.target).parent().parent().attr("id"), e.target.value, infoToModify);
  }

  handlePageClick(event) {
    event.preventDefault();
    // console.log(event.target.id);
    this.props.setCurrentPage(Number(event.target.id));
  }

  previousPageSet(e) {
    e.preventDefault();
    // console.log(this.props.currentBasePage - 4)
    if (this.props.currentBasePage - 4 > 1) {
      this.props.previousPage();
    }
  }

  nextPageSet(e) {
    e.preventDefault();
    // console.log(Math.ceil(this.props.resultsToAdd.length / this.props.resultsPerPage))
    if (this.props.currentBasePage + 4 < Math.ceil(this.props.resultsToAdd.length / this.props.resultsPerPage)) {
      this.props.nextPage();
    }
  }

  render() {
    const indexOfLastResult = this.props.currentPage * this.props.resultsPerPage,
          indexOfFirstResult = indexOfLastResult - this.props.resultsPerPage,
          viewPage = this.props.resultsToAdd.slice(indexOfFirstResult, indexOfLastResult);
          // console.log(this.props.resultsToAdd, viewPage)
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

    
    // console.log('bro')
    // console.log(this.props.resultsToAdd);
    const renderPageResults = viewPage.map(data => {
      let mediaFile = <div className="noImg" />;
      console.log(data.file)
      if (data.file[0]) {
        // console.log(data, 'filedata')
        mediaFile = (
          <img src={data.file[0]} />
        );
      }
      // console.log(this.props.eventSelection)
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
                      <div className="perPostText">
                        <h3 className="postResults" id="datePosted">{data.date}</h3>
                        <pre className="postResults" id="postBody" contentEditable={editableContent} dangerouslySetInnerHTML={{ __html: data.body }} ></pre>
                      </div>
                      {mediaFile}
                    </div>
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
          <ul id="postNavigation">
            <li id="clickLinks">
              <div className={data.category + 1} id={data._id} key={data._id}>
                <div className="perPost">
                  <h1 className="postResults" id="titleOfWriting" contentEditable={editableContent} dangerouslySetInnerHTML={{ __html: data.title }}></h1>
                  <div className="dateBodyImage">
                    <div className="perPostText">
                      <h3 className="postResults" id="datePosted">{data.date}</h3>
                      <pre className="postResults" contentEditable={editableContent} dangerouslySetInnerHTML={{ __html: data.body }}></pre>
                    </div>
                    {mediaFile}
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


