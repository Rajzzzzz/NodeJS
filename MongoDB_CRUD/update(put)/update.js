"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongodb = require("mongodb");
var NodeJS = mongodb.MongoClient;
var update = express.Router().put("/", function (req, res) {
    NodeJS.connect("mongodb+srv://khushisrivastavaahq:sasta@123@cluster0.mongodb.net/explorer/NodeJS/accounts?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("NodeJS");
            db.collection("accounts").updateOne({ id: req.body.id }, //updateOne is also predefined functiion
            { $set: { limit: req.body.limit, account_id: req.body.account_id } }, //$ - predefined operator that used to set what is to be updated based on id
            function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ message: "record updated successfully !!!!" }); //res. back to customer
                }
            });
        }
    });
});
exports.default = update;
