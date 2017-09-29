var Writing = require('./writingModel');
// var cookieController = require('./../util/cookieController');
// var sessionController = require('./../session/sessionController');

var writingController = {
	writing: writing,
  getWritings: getWritings
};

function writing(req, res) {
	// console.log(req.body)
	// var contentToSave = JSON.parse(req.body);
	console.log(req.body)
	Writing.create(req.body, function (err, result) {
	  if (err) return console.error(err);
	  console.log(result)
	});
  // saved!
}

function getWritings(req, res) {
  console.log(req.body)
	Writing.find(req.body, function(error, success) {
    if (error) console.error(error);
    res.send(success);
  });
}

module.exports = writingController;
