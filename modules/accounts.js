"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//create the module
var accounts = express.Router();
//create the get request
accounts.get("/", function (req, res) {
    res.status(200).json({ "message": "welcome to accounts module" });
});
accounts.get("/login", function (req, res) {
    if (req.query.uname == "raj" && req.query.upwd == "raj") {
        res.status(201).json({ "login": "success" });
    }
    else {
        res.status(401).json({ "login": "fail" });
    }
});
//export the module
exports.default = accounts;
