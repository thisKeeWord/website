var User = require('./userModel');
// var cookieController = require('./../util/cookieController');
// var sessionController = require('./../session/sessionController');

var userController = {};
userController.createUser = createUser;
// userController.getAllUsers = getAllUsers;
userController.verifyUser = verifyUser;

function createUser(req, res, next) {
  // write code here
	User.create(req.body, function(error, newUserInfo) {
  	if (error) return console.error(error);
		req.userData = newUserInfo;
		next();
  });
}

function verifyUser(req, res, next) {
  User.findOne({ username: req.body.username }, function(error, user) {
  	if (error || !user) return console.error(error);
  	user.verifying(req.body.password, function(error, satisfied) {
      if (error) return console.error(error, 'fsdjfsdaljkadfsjlkadfsl;');
      if (satisfied) {
  			req.userData = user;
  			next();
  		}
  	});
	})
}

// function getAllUsers(cb) {
//   User.find({}, function(err, users) {
//     if (!err) return cb(users);
//   });
// }

module.exports = userController;
