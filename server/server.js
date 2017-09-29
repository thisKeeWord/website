var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fallback = require('express-history-api-fallback');
var writingController = require('./../database/postWriting/writingController');
// var User = require('./../database/userModel');
// var userController = require('./../database/userController');
var mongoose = require('mongoose');
var mongoURI = 'mongodb://localhost/leoWebsite';
mongoose.connect(mongoURI);

// decoding data as string for format for url
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './../client/')));
app.use(fallback('index.html', { root: __dirname + './../client/' }));

app.get('/', function(req, res) {
	console.log(req)
	console.log('testing')
    res.sendFile('index.html');
});

app.post('/fitness', writingController.writing);

app.post('/blogs', function(req, res) {
	res.send('asdf');
});

app.post('/projects', function(req, res) {
	res.send('asdf');
});

app.get('/fitness', function(req, res) { 
	console.log('req', 'in server') 
	res.send('test')
});
// writingController.getWritings);

// app.post('/login', userController.verifyUser);


app.listen(3000);

module.exports = app;