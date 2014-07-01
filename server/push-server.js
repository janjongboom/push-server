var Path = require("path");
var helper = require("./helper");
var DB = helper.DB;
var express = require("express");
var request = require("request");

var db = new DB(Path.join(__dirname, '/db.json'));
var version = 0;

var app = express();

app.use(express.bodyParser());
app.use(helper.allowCors);

app.listen(process.env.PORT || 3000);
