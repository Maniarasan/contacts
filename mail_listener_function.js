'use strict';
var MailListener = require("mail-listener2");

var  mail = function(req, res) 
{

	console.log(req.params.email+" "+req.params.password);


var emailid=req.params.email+"@advisory.com";
var mailListener = new MailListener({
  username: emailid,
  password: req.params.password,
  host: "mail.advisory.com",
  port: 993, // imap port
  tls: true,
  tlsOptions: { rejectUnauthorized: false }
});



mailListener.start();

mailListener.on("server:connected", function(){
//  console.log("Login Successful");
res.send('1');

});

mailListener.on("server:disconnected", function(){

res.send('0');

});

mailListener.on("error", function(err){
 mailListener.start();

});

};

module.exports=mail;
