"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//create the rest object
var app = express();
//create the get request
app.get("/", function (_req, res) {
    res.status(200).json({ "message": "welcome to demo1 request" });
});
var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("server started");
});
