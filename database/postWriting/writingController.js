var Writing = require('./writingModel');
// var cookieController = require('./../util/cookieController');
// var sessionController = require('./../session/sessionController');

var writingController = {
	writing: writing
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

module.exports = writingController;
