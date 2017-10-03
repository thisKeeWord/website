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
	Writing.create(req.body, function (err, result) {
	  if (err) return console.error(err);
	  getWritings(req.body, res);
	});
  // saved!
}

function getWritings(req, res) {
  console.log(req.body, '8972r33r8')
	Writing.find(req.body, function(error, success) {
    if (error) return console.error(error);
    console.log(success, 'sojjdfsjdsaff')
    res.send(success);
  });
}

module.exports = writingController;
