import React from 'react';
import { Link } from 'react-router';
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
    console.log(this.props)
    console.log(window.location.pathname)
    const that = this;
    return $.ajax({
      type: 'POST', 
      url: '/singleWritings', 
      data: JSON.stringify({ title: window.location.pathname.split('/')[2].replace("-", " ") }), // stringyfy before passing
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
        // console.log(elem.file)
        imageResult = elem.file.map(el => {
          // console.log(el)
          return (
            <img src={el} />
          )
        });
        console.log(imageResult)
      }
      return (
        <div className={elem.category + 2} id={elem._id} key={elem._id}>
          <div className="singleResult">
            <h1 className="singlePostResult" id="writingTitle" dangerouslySetInnerHTML={{ __html: elem.title }}></h1>
            <h4 className="singlePostResult" id="postDate">{elem.date}</h4>
            <div className="singlePostTextImg">
              <pre className="singlePostResult" dangerouslySetInnerHTML={{ __html: elem.body }}></pre>
              <div className="imageGallery">
                {imageResult}
              </div>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className='SinglePost'>
        <ul className="navigationLinks">
          <li className="navi">
            <Link to='/'>Home</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/projects'>Projects</Link>
          </li>
        </ul>
        {singleResult}
      </div>
    );
  }
};

module.exports = SinglePost;