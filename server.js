var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + './';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});


var publicDir = require('path').join(__dirname,'./');
app.use(express.static(publicDir));

app.use("/",router);

app.listen(8084,function(){
  console.log("Live at Port 8084");
});