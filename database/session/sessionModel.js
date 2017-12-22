var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sessionSchema = new Schema({
  cookieId: {type: String, required: true, unique: true},
  // add expiration seconds
  expires: {type: Date, expires: 30}
});

module.exports = mongoose.model('Session', sessionSchema);