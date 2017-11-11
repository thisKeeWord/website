var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// TODO: Using mongoose middleware, bcrypt any new user passwords

var writingSchema = new Schema({
  date: { type: Number },
  category: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  file: { type: Array }
});

module.exports = mongoose.model('Writing', writingSchema);
