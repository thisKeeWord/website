import React from 'react';
import $ from 'jquery';

class PostForm extends React.Component {
  // componentDidMount() {
  //   $.get('/fitness', (error, data) => {
  //     return console.log(data);
  //   })
  // }

  testing(e) {
    e.preventDefault();
    console.log('wassup')
  }

  render() {
    return (
      <form onSubmit={this.testing}>
        <div className="formEntry" role="textbox" placeholder-default="What's poppin?" contentEditable="true" aria-multiline="true" spellCheck="true">
        </div>
        <input type="submit" value="submit"></input>
      </form>
    );
  }
};

module.exports = PostForm;


