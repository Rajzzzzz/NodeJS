"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//create the sub module
var express = require("express");
//create transaction module
var transactions = express.Router(); //router is the predefined function in express
transactions.get("/", function (req, res) {
    res.status(200).json({ message: "transaction soon...!" });
});
transactions.get("/raj", function (req, res) {
    res.status(200).json({ message: "welcome to raj for nodejs" });
});
//to export transaction module
exports.default = transactions;
