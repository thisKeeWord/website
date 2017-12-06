import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Results extends React.Component {

  escOptions(e) {
    e.preventDefault();
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
    const that = this;
    if (this.props.currentLink === 'all') {
      let omgResults = this.props.resultsToAdd.map((datas, pos, arr) => {
        let mFile = null;
        console.log(datas[0])
        if (datas.length > 0) {
          if (datas[0].file[0]) {
            mFile = (
              <img className="images" src={datas[0].file[0]} />
            );
          }
          if (pos === 0 || datas[0].category !== arr[pos - 1].category) {
            return (
              <div className="groupCategory">
                <h2>{datas[0].category}</h2>
                <div className="postByCategory" id={datas[0]._id} key={datas[0]._id}>
                  <div className="perPostCategory">
                    <h1 className="postResultsCategory" id="titleOfWriting" contentEditable={editableContent} dangerouslySetInnerHTML={{ __html: datas[0].title }}></h1>
                    <div className="dateBodyImageCategory">
                      <h4 className="postResultsCats" id="datePosted">{(new Date(datas[0].date)).toLocaleString()}</h4>
                      {mFile}
                      <pre className="postResultsCats" dangerouslySetInnerHTML={{ __html: datas[0].body }}></pre>
                    </div>
                  </div>
                </div>
                <Link id="linkToPost" to={`/blog/${datas[0].category}/${datas[0].title.replace(" ", "-")}`}>
                  Read More
                </Link>
              </div>
            )
          }
          else if (pos === arr.length - 1 || datas[0].category !== arr[pos + 1].category) {
            <div className="groupCategory" id="groupCategoryShort">
              <div className="postByCategory" id={datas[0]._id} key={datas[0]._id}>
                <div className="perPostCategory">
                  <h1 className="postResultsCategory" id="titleOfWriting" contentEditable={editableContent} dangerouslySetInnerHTML={{ __html: datas[0].title }}></h1>
                  <div className="dateBodyImageCategory">
                    <h4 className="postResultsCats" id="datePosted">{(new Date(datas[0].date)).toLocaleString()}</h4>
                    {mFile}
                    <pre className="postResultsCats" dangerouslySetInnerHTML={{ __html: datas[0].body }}></pre>
                  </div>
                </div>
              </div>
              <Link id="linkToPost" to={`/blog/${datas[0].category}/${datas[0].title.replace(" ", "-")}`}>
                Read More
              </Link>
            </div>
          }
          else {
            <div className="groupCategory" id="groupCategoryShort">
              <div className="postByCategory" id={datas[0]._id} key={datas[0]._id}>
                <div className="perPostCategory">
                  <h1 className="postResultsCategory" id="titleOfWriting" contentEditable={editableContent} dangerouslySetInnerHTML={{ __html: datas[0].title }}></h1>
                  <div className="dateBodyImageCategory">
                    <h4 className="postResultsCats" id="datePosted">{(new Date(datas[0].date)).toLocaleString()}</h4>
                    {mFile}
                    <pre className="postResultsCats" dangerouslySetInnerHTML={{ __html: datas[0].body }}></pre>
                  </div>
                </div>
              </div>
              <Link id="linkToPost" to={`/blog/${datas[0].category}/${datas[0].title.replace(" ", "-")}`}>
                Read More
              </Link>
            </div>
          }
        }
      });
      return (
        <div className="allResults">
          {omgResults}
        </div>
      )
    }
    const indexOfLastResult = this.props.currentPage * this.props.resultsPerPage,
          indexOfFirstResult = indexOfLastResult - this.props.resultsPerPage,
          viewPage = this.props.resultsToAdd.slice(indexOfFirstResult, indexOfLastResult);
    let editable = null, editableContent = null;
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
              <Link id="linkToPost" to={`/blog/${data.category}/${data.title.replace(" ", "-")}`}>
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


