import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
// import Navigate from './Navigate';
// import Footers from './Footers';

class SinglePost extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    }
  }

  addSingleWritings(singleWriting) {
    this.setState({
      results: singleWriting
    });
  }

  componentWillMount() {
    window.scrollTo(0,0);
  }

  componentDidMount() {
    const that = this;
    return $.ajax({
      type: 'POST', 
      url: '/singleWritings', 
      data: JSON.stringify({ title: location.pathname.split('/')[2].replace("-", " ") }), // stringyfy before passing
      dataType: 'json', // payload is json
      contentType : 'application/json',
      success: writing => {
        that.addSingleWritings(writing);
      }
    });
  }

  render() {
    const singleResult = this.state.results.map(elem => {
      let imageResult = null;
      let textContainerWidth = 100;
      if (elem.file[0]) {
        textContainerWidth = 50;
        imageResult = (
          <div className="imageGallery">
            {
              elem.file.map(el => {
                return (
                  <img className="imagery" src={el} />
                )
              })
            }
          </div>
        )
      }
      return (
        <div className={elem.category + 2} id={elem._id} key={elem._id}>
          <div className="singleResult">
            <h1 className="singlePostResult" id="writingTitle" dangerouslySetInnerHTML={{ __html: elem.title }}></h1>
            <h4 className="singlePostResult" id="postDate">{(new Date(elem.date)).toLocaleString()}</h4>
            <div className="singlePostTextImg">
              {imageResult}
              <pre className="singlePostResult" dangerouslySetInnerHTML={{ __html: elem.body }} style={{ width: textContainerWidth + "%" }}></pre>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className='SinglePost'>
        <div className="singleRead">
          {singleResult}
        </div>
      </div>
    );
  }
};

module.exports = SinglePost;