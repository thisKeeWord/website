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
	Writing.create(req.body, function (err, result) {
	  if (err) return console.error(err);
	  getWritings(req, res);
	});
  // saved!
}

function getWritings(req, res) {
  var sendList = {
    fitness: [],
    food: [],
    lifestyle: [],
    personal: [],
    tech: [],
    travel: []
  };
  var finalResult = [];
  var count = 0;
  if (req.body.category === 'all') {
    Writing.find({}, function(error, findings) {
      
      findings.sort(function(a, b) {
        return a.date - b.date
      });
      findings.forEach(function(items) {
        if (sendList[items.category].length < 3) {
          sendList[items.category].push(items);
        }
        count++;
      });
      if (findings.length > 0 && (sendList.fitness.length === sendList.food.length === sendList.lifestyle.length === sendList.personal.length === sendList.tech.length === sendList.travel.length === 2 || count === findings.length)) {
        for (var key in sendList) {
          if (key.length > 0) {
            finalResult.push(...(sendList[key].reverse()));
          }
        }
        return res.send([finalResult, 'dont reverse this']);
      }
    });
  }
	else {
    Writing.find({ category: req.body.category }, function(error, success) {
      if (error) return console.error(error);
      var itemsProcessed = 0;
      success.forEach(function(elem) {
        itemsProcessed++;
      });
      if (itemsProcessed === success.length) {
        success.sort(function(a, b) {
          return a.date - b.date;
        });
        res.send(success);
      }
    });
  }
}

function updateWritings(req, res) {
  Writing.findByIdAndUpdate(req.body.id, { title: req.body.title, body: req.body.body }, function(err, complete) {
    if (err) return console.error(err);
    getWritings(req, res);
  });
}

function removeWritings(req, res) {
  Writing.findByIdAndRemove(req.body.id, function(err, removed) {
    if (err) return console.error(err);
    getWritings(req, res);
  });
}

function getSingleWritings(req, res) {
  Writing.findOne({ title: req.body.title }, function(err, foundIt) {
    if (err) return console.error(err);
    res.send([foundIt]);
  });
}

module.exports = writingController;
