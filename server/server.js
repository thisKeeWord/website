var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 3001));

app.use(express.static(path.join(__dirname, './../')));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('/resume', function(req, res) {
  res.sendFile(path.join(__dirname, '../secondary_pages', 'resume.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


module.exports = app;