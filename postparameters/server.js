"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//import body-parser module, used to read post parameters
//body-parser module used to read the "post" parameters
var bodyparser = require("body-parser");
//create rest object 
var app = express();
//set the mime type (json is communication lang.)
app.use(bodyparser.json());
//recieve form data from client and parse the data (extended Ex. uname,upwd...)
app.use(bodyparser.urlencoded({ extended: false })); //urlencoded means the data coming from client
//authorization code 
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    var token = allHeaders.tokens; //any is the datatype
    if (token == "node") {
        next();
    }
    else {
        res.status(401).json({ auth: "fail" });
    }
};
app.post("/login", [auth], function (req, res) {
    if (req.body.uname == "raj" && req.body.upwd == "raj") {
        res.status(200).json({ login: "suceess" });
    }
    else {
        res.status(401).json({ login: "fail" });
    }
    ;
});
app.listen(8080, function () {
    console.log("server start");
});
