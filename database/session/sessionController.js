var Session = require('./sessionModel');
var Cookies = require('cookies');

var sessionController = {};
sessionController.isLoggedIn = isLoggedIn;
sessionController.startSession = startSession;

function isLoggedIn(req, res, next) {
  // write code here
  req.cookies = new Cookies(req, res);
  Session.findOne({ cookieId: req.cookies.get('ssid') }, function(error, complete) {
  	if (complete) {
  		next();
  	}
  	else {
			res.redirect('/signup');
		}
  });
}

function startSession(req, res, next) {
  //write code here
  console.log('starting session')
 	Session.findOne({ cookieId: req.userData._id }, function(error, session) {
 		if (error) return console.log(error);
 		if (session) return res.redirect('/secret');
		var session = new Session({
			cookieId: req.userData._id
		});

		session.save(function(error, userSession) {
			console.log('saving session')
			if (error) return console.log(error);
			res.send('true')
		})
	})
}
 

module.exports = sessionController;