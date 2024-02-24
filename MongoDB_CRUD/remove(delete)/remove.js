"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongodb = require("mongodb");
var NodeJS = mongodb.MongoClient;
var remove = express.Router().delete("/", function (req, res) {
    NodeJS.connect("mongodb+srv://khushisrivastavaahq:sasta@123@cluster0.mongodb.net/explorer/NodeJS/accounts?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("NodeJS");
            db.collection("accounts").deleteOne({ "id": req.body.id }, function (err, res) {
                if (err)
                    throw err;
                else {
                    res.status(200).json({ message: "".concat(req.body.id, " record deleted success") });
                }
            });
        }
    });
});
exports.default = remove;
