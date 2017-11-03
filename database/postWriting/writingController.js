var Writing = require('./writingModel');
var fs = require('fs');
// var cookieController = require('./../util/cookieController');
// var sessionController = require('./../session/sessionController');

var writingController = {
	writing: writing,
  getWritings: getWritings,
  updateWritings: updateWritings,
  removeWritings: removeWritings,
  getSingleWritings: getSingleWritings
};

function writing(req, res) {
  // if (req.body.file)
	// console.log(req.body.file, 'looking at the body')
  // console.log(Buffer.from(req.body.file, 'base64'));
	// var contentToSave = JSON.parse(req.body);
  // console.log(base64Img.base64(req.body.file), function(err, resu) { if (err) return console.error(err); console.log(resu)})
  // req.body.file = Buffer.from(req.body.file);
  console.log(req.body.file)
  var dateConvert = new Date;
  req.body.date = dateConvert.toLocaleString();
	Writing.create(req.body, function (err, result) {
	  if (err) return console.error(err);
	  getWritings(req, res);
	});
  // saved!
}

function getWritings(req, res) {
  console.log(req.body, '8972r33r8')
	Writing.find({ category: req.body.category }, function(error, success) {
    if (error) return console.error(error);
    // console.log(success, 'sojjdfsjdsaff')
    // console.log(success, 'needtobuffer')
    var itemsProcessed = 0;
    // console.log(success, 'success')
    // success.filter(function(categoryVsUrl) {
    //   console.log(categoryVsUrl, 'cvu')
    //   categoryVsUrl.category === req.body.currUrl;
    // });
    // console.log('new success', success)
    success.forEach(function(elem) {
      
      // if (elem.file) {
      //   console.log('elem', elem.file.toString('utf8'))
      //   elem.file = elem.file.toString();
      //   console.log(elem.file, 'file convert testing')
      // }
      itemsProcessed++;

    });
    if (itemsProcessed === success.length) {
      // console.log(itemsProcessed)
      success.sort(function(a, b) {
        return a.date > b.date;
      });
      console.log(success)
      res.send(success);
    }
  });
}

function updateWritings(req, res) {
  // console.log(req.body)
  Writing.findByIdAndUpdate(req.body.id, { title: req.body.title, body: req.body.body }, function(err, complete) {
    if (err) return console.error(err);
    getWritings(req, res);
  });
}

function removeWritings(req, res) {
  // console.log(req.body)
  Writing.findByIdAndRemove(req.body.id, function(err, removed) {
    if (err) return console.error(err);
    getWritings(req, res);
  });
}

function getSingleWritings(req, res) {
  // console.log(req.body)
  Writing.findOne({ title: req.body.title }, function(err, foundIt) {
    if (err) return console.error(err);
    res.send([foundIt]);
  });
}

module.exports = writingController;
