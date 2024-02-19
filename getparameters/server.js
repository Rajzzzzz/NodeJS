"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//http://localhost:8080/login?uname=raj&upwd=raj
var express = require("express");
var app = express();
//token verification(authorisation)
//if token is present than only should be authorised
//before login we should perform authorisation
//authorization
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    if (allHeaders.token == "rajgiri") {
        next();
    }
    else {
        res.status(500).json({ auth: "fail" }); //to terminate 
    }
    ;
};
//now to check authorisation
//we need go to the postman and there we have to set the headers key to token 
//and value to raj than only will show the success 
//get request
app.get("/login", [auth], function (req, res) {
    if (req.query.uname == "raj" && req.query.upwd === "raj") {
        res.status(201).json({ login: "success" });
    }
    else {
        res.status(401).json({ login: "fail" });
    }
    ;
});
//default request
app.get("/", function (req, res) {
    res.sendFile("/Users/rajeshwarkumargiri/Documents/NodeJS/NodeJS/getparameters/index.html");
});
app.listen(8080, function () {
    console.log("server starter");
});
