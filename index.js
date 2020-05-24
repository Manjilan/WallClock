//-----SETUP and CONFIGURATION -------------->
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true, }));

app.get("/", function(req, res){
  var time = new Date().toLocaleString("en-US", {timeZone: req.body.timezone});
  res.json((new Date(time)).toTimeString().split(" ")[0]);
});

app.post("/", function(req, res){
  console.log(req.body);
  var time = new Date().toLocaleString("en-US", {timeZone: req.body.timezone});
  res.send((new Date(time)).toTimeString().split(" ")[0]);
});
//-------------Server------------->
app.listen(process.env.PORT || 4000, function () {
    console.log('Checkout http://localhost:3000/');
});
