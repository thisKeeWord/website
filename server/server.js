var fs = require('fs');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fallback = require('express-history-api-fallback');
var writingController = require('./../database/postWriting/writingController');
var User = require('./../database/user/userModel');
var userController = require('./../database/user/userController');
var Session = require('./../database/session/sessionModel');
var sessionController = require('./../database/session/sessionController');
var cookieController = require('./../database/util/cookieController');
var mongoose = require('mongoose');
var mongoURI = 'mongodb://localhost/leoWebsite';
mongoose.connect(mongoURI);

// decoding data as string for format for url
app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));
app.use(express.static(path.join(__dirname, './../client/')));
app.use(fallback('index.html', { root: __dirname + './../client/' }));

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.post('/fitness', writingController.writing);

app.post('/blogs', writingController.writing);

app.post('/projects', function(req, res) {
	res.send('asdf');
});

app.post('/fack', writingController.getWritings);

app.post('/login', userController.verifyUser, cookieController.setSSIDCookie, sessionController.startSession);

app.put('/update', writingController.updateWritings);

app.delete('/update', writingController.removeWritings);

app.post('/singleWritings', writingController.getSingleWritings);


app.listen(3001);

module.exports = app;