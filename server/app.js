var express = require("express");
var app = express();
var path = require("path");
var router = express.Router();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function(req,res){
  console.log('in base url---sweeeeeet');
            // specified root, which is used as the base path for the first arguement to res.sendFile()
            res.sendFile("index.html", {root: "server/public/views"} );
});

app.use(express.static ("public"));


app.listen( 8080 , function(){
  console.log("Mama is listening on 8080...");
});
