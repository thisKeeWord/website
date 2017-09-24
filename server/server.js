var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fallback = require('express-history-api-fallback');
// var User = require('./../database/userModel');
// var userController = require('./../database/userController');
var mongoose = require('mongoose');
// var mongoURI = process.env.NODE_ENV === 'test1' ? 'mongodb://localhost/test1' : 'mongodb://localhost/gainsApp';
// mongoose.connect(mongoURI);

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

app.post('/fitness', function(req, res) {

	console.log(req.body)
	res.send(['hello']);
});

app.post('/blogs', function(req, res) {
	res.send('asdf');
});

app.post('/projects', function(req, res) {
	res.send('asdf');
})
// app.post('/login', userController.verifyUser);


app.listen(3000);

module.exports = app;