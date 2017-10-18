import React from 'react';
import $ from 'jquery';

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

  componentDidMount() {
    const that = this;
    return $.ajax({
      type: 'POST', 
      url: '/singleWritings', 
      data: JSON.stringify({ id: window.location.pathname.split('/')[2] }), // stringyfy before passing
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
      if (elem.file) {
        imageResult = (
          <img src={elem.file} />
        )
      }
      return (
        <div className={elem.category + 2} id={elem._id} key={elem._id}>
          <div className="perPost">
            <div className="perPostText">
              <h1 className="singlePostResult" id="writingTitle">{elem.title}</h1>
              <h3 className="singlePostResult" id="postDate">{elem.date}</h3>
              <p className="singlePostResult">{elem.body}</p>
            </div>
            {imageResult}
          </div>
        </div>
      )
    });
    return (
      <div className='SinglePost'>
        {singleResult}
      </div>
    );
  }
};

module.exports = SinglePost;