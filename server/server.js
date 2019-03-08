
var fs = require('fs');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fallback = require('express-history-api-fallback');


app.set('port', (process.env.PORT || 3001));

// decoding data as string for format for url
// app.use(bodyParser.json({limit: '500mb'}));
// app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));
app.use(express.static(path.join(__dirname, './../')));
// app.use(fallback('index.html', { root: __dirname + './../client/' }));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

// app.get('/resume', function(req, res) {
//   res.sendFile('resume.html');
// });




app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


module.exports = app;