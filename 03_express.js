"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import express module 
var express = require("express");
//create the rest object 
var app = express();
//app object use to develope the rest services
//Ex. GET,POST,DELETE....
//get request
app.get("/raj", function (req, res) {
    res.status(200).json({ "message": "welcome to ts with nodejs" });
});
//assign the port no.
app.listen(8080, function () {
    console.log("server starter");
});
//to convert ts file to js file we use commend tsc 03_express.ts
