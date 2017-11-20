var Cookies = require('cookies');
var sessionController = require('./../session/sessionController');

var cookieController = {};
cookieController.setCookie = setCookie;
cookieController.setSSIDCookie = setSSIDCookie;

function setCookie(req, res, next) {
  //write code here
  res.cookie('codesmith', 'hi');
  res.cookie('secret', Math.random() * 99);
  next();
}

function setSSIDCookie(req, res, next) {
  // write code here
  req.cookies = new Cookies(req, res);
  req.cookies.set('ssid', req.userData._id);
  next();
}

module.exports = cookieController;