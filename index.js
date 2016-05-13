	
var express = require('express');
var app     = express();
var mail=require('./mail_listener_function');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var mail_route='/myaction/:email/:password';
app.post(mail_route, mail);

app.listen(3000, function() {
  console.log('Server running at http://127.0.0.1:3000/');
});