var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// TODO: Using mongoose middleware, bcrypt any new user passwords

var writingSchema = new Schema({
  date: { type: Date, default: Date.now },
  category: { type: String, required: true },
  title: { type: String, required: true },
  body: {type: String, required: true}
});

writingSchema.pre('save', function(next) {
});

module.exports = mongoose.model('Writing', writingSchema);
