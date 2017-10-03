var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SALT_WORK_FACTOR = 10;
var bcrypt = require('bcryptjs');

// TODO: Using mongoose middleware, bcrypt any new user passwords

var userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

userSchema.pre('save', function(next) {
	var self = this;
	console.log("this is not this", this);
	bcrypt.hash(this.password, SALT_WORK_FACTOR, function(error, hash) {
		self.password = hash;
		console.log('after hash', self);
		next();
	})
})

userSchema.methods.verifying = function(pass, callback) {
  console.log('89twerpuogijsdflkznvc,mvzfdgshjl')
	var self = this;
  bcrypt.compare(pass, self.password, function(error, result) {
  	console.log("this is the password verification", self.password);
    if(error || result === false) return console.log(error);
    if(result === true) callback(null, result);
  });
}


module.exports = mongoose.model('User', userSchema);
