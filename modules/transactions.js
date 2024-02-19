"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//create the module
var transactions = express.Router();
var auth1 = function (req, res, next) {
    var allHeaders = req.headers;
    var token = allHeaders.token;
    if (token == "giri") {
        next();
    }
    else {
        res.status(201).json({ "auth1": "failed" });
    }
};
var auth2 = function (req, res, next) {
    var allHeaders = req.headers;
    var wish = allHeaders.wish;
    if (wish == "abc123") {
        next();
    }
    else {
        res.status(201).json({ "auth1": "failed" });
    }
};
//create the get request
transactions.get("/", [auth1, auth2], function (req, res) {
    res.status(200).json({ "message": "welcome to transactions module" });
});
transactions.get("/login", function (req, res) {
    if (req.query.uname == "raj" && req.query.upwd == "raj") {
        res.status(201).json({ "login": "success" });
    }
    else {
        res.status(401).json({ "login": "fail" });
    }
});
//export the module
exports.default = transactions;
