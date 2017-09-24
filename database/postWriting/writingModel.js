var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// TODO: Using mongoose middleware, bcrypt any new user passwords

var writingSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

writingSchema.pre('save', function(next) {


module.exports = mongoose.model('Writing', writingSchema);
