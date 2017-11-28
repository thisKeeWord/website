import React from 'react';
import $ from 'jquery';

class PostForm extends React.Component {
  post(writing) {
    return $.ajax({
      type: 'POST', 
      url: '', 
      data: JSON.stringify(writing), // stringyfy before passing
      dataType: 'json', // payload is json
      contentType : 'application/json'
    });
  }

  appendResults(data) {
    this.props.addResultsToPage(data);
  }

  testing(e) {
    e.preventDefault();
    let that = this;
    let bodyReplacement = $(".formEntry")[0].innerHTML;
    if ($(".formEntry")[0].children) {
      bodyReplacement = $(".formEntry")[0].children[0].innerHTML;
    }
    let entry = {
      currUrl: window.location.pathname.split('/')[2],
      url: '/' + this.props.entrySelection,
      category: this.props.entrySelection,
      title: $(".entryTitle")[0].innerHTML,
      body: bodyReplacement,
      file: that.props.imageInfo
    };
    return this.post(entry).done(info => {
      if (entry.currUrl === entry.category) {
        that.appendResults(info.reverse());
      }
    });
  }

  onChange(e) {
    e.preventDefault();
    this.props.updateCategory(e.target.value);
  }

  fileChange(e) {
    e.preventDefault();
    let fileSet = $("#myFile")[0].files;
    for (let filePos in fileSet) {
      if (!isNaN(filePos)) {
        let canvas = document.getElementById('imageCanvas');
        let ctx = canvas.getContext('2d');
        let reader = new FileReader();
        reader.onload = event => {
          this.props.grabImageData(event.target.result);
          let img = new Image();
          img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
          }
          img.src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[filePos]);
      }
    }
  }

  render() {
    return (
      <form className="Form" onSubmit={this.testing.bind(this)}>
        <select className="entryCategory" value={this.props.entryCategory} onChange={this.onChange.bind(this)}>
          <option value="food">Food</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="travel">Travel</option>
          <option value="fitness">Fitness</option>
          <option value="personal">Personal</option>
        </select>
        <div className="entryTitle" role="textbox" placeholder="What's the title" contentEditable="true" aria-multiline="true" spellCheck="true"></div>
        <div className="formEntry" role="textbox" placeholder="What's poppin?" contentEditable="true" aria-multiline="true" spellCheck="true"></div>
        <input type="file" id="myFile" multiple size="600000" accept=".jpg,.jpeg,.gif,.png" onChange={this.fileChange.bind(this)} />
        <canvas id="imageCanvas"></canvas>
        <input type="submit" id="submitButton" value="submit"></input>
      </form>
    );
  }
};

module.exports = PostForm;


