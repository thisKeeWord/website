import React from 'react';
import $ from 'jquery';

class PostForm extends React.Component {
  // componentDidMount() {
  //   $.get('/fitness', (error, data) => {
  //     return console.log(data);
  //   })
  // }
  post(writing) {
    console.log('testing')
    return $.ajax({
      type: 'POST', 
      url: '', 
      data: JSON.stringify(writing), // stringyfy before passing
      dataType: 'json', // payload is json
      contentType : 'application/json'
    });
    // $.post('', writing, (error, success) => {
    //   if (error) return console.error(error)
    //   return console.log('success again');
    // });
  }

  appendResults(data) {
    this.props.addResultsToPage(data);
  }

  testing(e) {
    e.preventDefault();
    let that = this;
    console.log($("#myFile")[0].files[0].name);
    let entry = {
      url: window.location.pathname,
      category: this.props.entrySelection,
      title: $(".entryTitle").text(),
      body: $(".formEntry").text(),
      file: that.props.imageInfo
    };
    return this.post(entry).done(info => {
      that.appendResults(info);
    });
    // .done(() => {
      // console.log('done')
    // })
    // .done(() => {
      // console.log('successful post sent');
    // });
  }

  onChange(e) {
    e.preventDefault();
    this.props.updateCategory(e.target.value);
  }

  fileChange(e) {
    e.preventDefault();
    console.log($("#myFile")[0].files[0]);
    let canvas = document.getElementById('imageCanvas');
    let ctx = canvas.getContext('2d');
    let reader = new FileReader();
    reader.onload = event => {
      this.props.grabImageData(event.target.result);
      // console.log(event.target.result)

      let img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img,0,0);
      }
      img.src = event.target.result;
    }
  // reader.readAsDataURL(e.target.files[0]);     
    reader.readAsDataURL(e.target.files[0]);

    console.log(reader.readAsDataURL($("#myFile")[0].files[0]));
  }
  // handleChange(e) {
  //   e.preventDefault();
  //   this.props.handleTitleChange(e.target.value);
  // }

  render() {
    return (
      <form onSubmit={this.testing.bind(this)}>
        <select className="entryCategory" value={this.props.entryCategory} defaultValue='select one' onChange={this.onChange.bind(this)}>
          <option value="blogs">Blogs</option>
          <option value="fitness">Fitness</option>
          <option value="projects">Projects</option>
        </select>
        <div className="entryTitle" role="textbox" placeholder="What's the title" contentEditable="true" aria-multiline="true" spellCheck="true"></div>
        <div className="formEntry" role="textbox" placeholder="What's poppin?" contentEditable="true" aria-multiline="true" spellCheck="true"></div>
        <input type="file" id="myFile" multiple size="6000" accept=".jpg,.jpeg,.gif,.png" onChange={this.fileChange.bind(this)} />
        <canvas id="imageCanvas"></canvas>
        <input type="submit" id="submitButton" value="submit"></input>
      </form>
    );
  }
};

module.exports = PostForm;


