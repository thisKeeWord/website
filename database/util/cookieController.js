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
  console.log('inSSIDCookie!', req.userData._id);
  // console.log(id);
  req.cookies = new Cookies(req, res);
  // console.log('about to pass req.cookies', req.cookies)
  req.cookies.set('ssid', req.userData._id);
  next();
  // console.log(res.cookie);
  // res.redirect('/secret');
}

module.exports = cookieController;