"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//create the module
var cards = express.Router();
//create the get request
cards.post("/", function (req, res) {
    res.status(200).json({ "message": "welcome to cards module" });
});
//export the module
exports.default = cards;
