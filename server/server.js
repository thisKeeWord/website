var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var User = require('./../database/userModel');
var userController = require('./../database/userController');
var mongoose = require('mongoose');
var mongoURI = process.env.NODE_ENV === 'test1' ? 'mongodb://localhost/test1' : 'mongodb://localhost/gainsApp';
mongoose.connect(mongoURI);

// decoding data as string for format for url
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, './../client/')));

app.get('/', function(req, res) {
    res.sendFile('index.html');
})
app.post('/signup', userController.createUser);
app.post('/login', userController.verifyUser);


app.listen(3000);

module.exports = app;