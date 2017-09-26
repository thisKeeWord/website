var Writing = require('./writingModel');
// var cookieController = require('./../util/cookieController');
// var sessionController = require('./../session/sessionController');

var writingController = {
	writing: writing
};

function writing(req, res) {
	console.log(req.body)
	res.send(['success']);
}

module.exports = writingController;
