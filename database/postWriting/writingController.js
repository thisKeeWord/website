var Writing = require('./writingModel');
// var cookieController = require('./../util/cookieController');
// var sessionController = require('./../session/sessionController');

var writingController = {
	writing: writing,
  getWritings: getWritings,
  updateWritings: updateWritings,
  removeWritings: removeWritings
};

function writing(req, res) {
	// console.log(req.body)
	// var contentToSave = JSON.parse(req.body);
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
    console.log(success, 'sojjdfsjdsaff')
    res.send(success);
  });
}

function updateWritings(req, res) {
  console.log(req.body)
  Writing.findByIdAndUpdate(req.body.id, { title: req.body.title, body: req.body.body }, function(err, complete) {
    if (err) return console.error(err);
    getWritings(req, res);
  });
}

function removeWritings(req, res) {
  console.log(req.body)
  Writing.findByIdAndRemove(req.body.id, function(err, removed) {
    if (err) return console.error(err);
    getWritings(req, res);
  });
}

module.exports = writingController;
