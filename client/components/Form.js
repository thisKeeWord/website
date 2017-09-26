import React from 'react';
import $ from 'jquery';

class PostForm extends React.Component {
  // componentDidMount() {
  //   $.get('/fitness', (error, data) => {
  //     return console.log(data);
  //   })
  // }
  post(writing) {
    $.post('', writing, (error, success) => {
      console.log('success again');
    });
  }

  testing(e) {
    e.preventDefault();
    console.log(this.post)
    let entry = { 
      entry: $(".formEntry").text() 
    };
    this.post(entry)
    // .done(() => {
      // console.log('successful post sent');
    // });
  }

  onChange(e) {
    e.preventDefault();
    this.props.updateCategory(e);
  }

  render() {
    return (
      <form onSubmit={this.testing.bind(this)}>
        <select className="entryCategory" value={this.props.entryCategory} defaultValue='select one' onChange={this.onChange.bind(this)}>
          <option value="blogs">Blogs</option>
          <option value="fitness">Fitness</option>
          <option value="projects">Projects</option>
        </select>
        <input type="text" id="title" placeholder="title of entry"></input>
        <div className="formEntry" role="textbox" placeholder="What's poppin?" contentEditable="true" aria-multiline="true" spellCheck="true"></div>
        <input type="submit" value="submit"></input>
      </form>
    );
  }
};

module.exports = PostForm;


