import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import $ from 'jquery';
import SinglePost from './SinglePost';


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

  // will compartmentalize at a later date
  render() {
    // issue if with rapid clicking
    // console.log(location.pathname.split("/")[2], this.props.currentLink);
    
    const that = this;
    let omgResults = null;
    if (this.props.currentLink === 'all') {
      omgResults = this.props.resultsToAdd.map((datas, pos, arr) => {
        let mFile = null;
        if (datas.file[0]) {
          mFile = (
            <img className="images" src={datas.file[0]} />
          );
        }
        return (
          <Carousel.Item>
            <div className="groupCategory" id="groupCategoryShort">
              <div className="postByCategory" id={datas._id} key={datas._id}>
                <div className="perPostCategory">
                  <h1 className="postResultsCategory" id="titleOfWriting" contentEditable={editableContent} dangerouslySetInnerHTML={{ __html: datas.title }}></h1>
                  <div className="dateBodyImageCategory">
                    <h4 className="postResultsCats" id="datePosted">{(new Date(datas.date)).toLocaleString().split(",")[0]}</h4>
                    <pre className="postResultsCatsBod" dangerouslySetInnerHTML={{ __html: datas.body }}></pre>
                  </div>
                </div>
              </div>
              <Link id="linkToPost" to={`/blog/${datas.category}/${datas.title.replace(/\s+/g, '-')}`}>
                Read More
              </Link>
            </div>
          </Carousel.Item>
        )
      });
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

    let renderPageResults = null;

    if (this.props.resultsToAdd.length === 0) {
      renderPageResults = (
        <div className="noResults">
          There are currently no blogs available for this category.
        </div>
      );
    }
    else {
      renderPageResults = viewPage.map(data => {
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
                        <h4 className="postResults" id="datePosted">{(new Date(data.date)).toLocaleString().split(",")[0]}</h4>
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
                      <h4 className="postResults" id="datePosted">{(new Date(data.date)).toLocaleString().split(",")[0]}</h4>
                      {mediaFile}
                      <pre className="postResults" contentEditable={editableContent} dangerouslySetInnerHTML={{ __html: data.body }}></pre>
                    </div>
                  </div>
                </div>
                <Link id="linkToPost" to={`/blog/${data.category}/${data.title.replace(/\s+/g, '-')}`}>
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
    }

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.resultsToAdd.length / this.props.resultsPerPage); i++) {
      pageNumbers.push(i);
    }
    let renderPageNumbers = null;
    if (pageNumbers.length > 0) {
      renderPageNumbers = (
        <ul id="pageNum">
          <li className="page" key="previous" id="previous" onClick={this.previousPageSet.bind(this)}>&laquo;</li>
            {
              pageNumbers.map(number => {
                return (
                  <li className="page" key={number} id={number} onClick={this.handlePageClick.bind(this)}>{number}</li>
                );
              }).slice(this.props.currentBasePage - 1, 5)
            }
          <li className="page" key="next" id="next" onClick={this.nextPageSet.bind(this)}>&raquo;</li>
        </ul>
      );
    }

    if (location.pathname.split("/")[2] === undefined || location.pathname.split("/")[2] === "") {
      return (
        <div className="allResults">
          <h2 className="latestPosts">Latest Posts</h2>
          <div className="carouselPosts">
            <Carousel>
              {omgResults}
            </Carousel>
          </div>
        </div>
      )
    }

    else if ((location.pathname.split("/")[3] === undefined || location.pathname.split("/")[3] === "") && location.pathname.split("/")[2] === this.props.currentLink) {
      console.log(renderPageResults, 'renderPageResults')
      return (
        <div className='Results'>
          <div className="resultsByPage">
            {renderPageResults}
          </div>
          {renderPageNumbers}
        </div>
      );
    }

    else {
      return <div></div>
    }
  }
};

module.exports = Results;


