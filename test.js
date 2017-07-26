console.log("Welcome to the world of Node");
console.log(2+2);

var fileYo=require('fs');
var https=require('https');
fileYo.writeFile(__dirname+"/index.html", "<h1> Welcome to the World of Node </h1>");
var fboLogo="https://freshboxoffice.com/img/fbo-w.png";
var fboFile=fileYo.create.WriteStream(__dirname + "/fbologo.jpg");
var request=https.get(fboLogo,function(response){response.pipe()});
