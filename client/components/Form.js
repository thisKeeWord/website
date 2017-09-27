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
    console.log(e)
    let entry = {
      url: window.location.pathname,
      // title: 
      entry: $(".formEntry").text(),
      category: this.props.entrySelection,

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

  handleChange(e) {
    e.preventDefault();
    this.props.handleTitleChange(e.target.value);
  }

  render() {
    return (
      <form onSubmit={this.testing.bind(this)}>
        <select className="entryCategory" value={this.props.entryCategory} defaultValue='select one' onChange={this.onChange.bind(this)}>
          <option value="blogs">Blogs</option>
          <option value="fitness">Fitness</option>
          <option value="projects">Projects</option>
        </select>
        <input type="text" id="title" value={this.props.titleOfEntry} onChange={this.handleChange.bind(this)} placeholder="title of entry" />
        <div className="formEntry" role="textbox" placeholder="What's poppin?" contentEditable="true" aria-multiline="true" spellCheck="true"></div>
        <input type="submit" value="submit"></input>
      </form>
    );
  }
};

module.exports = PostForm;


