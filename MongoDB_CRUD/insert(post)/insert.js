"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongodb = require("mongodb");
var NodeJS = mongodb.MongoClient;
var insert = express.Router().post("/", function (req, res) {
    NodeJS.connect("mongodb+srv://khushisrivastavaahq:sasta@123@cluster0.mongodb.net/explorer/NodeJS/accounts?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("NodeJS");
            db.collection("accounts").insertOne({ "id": req.body.id, //add that much field which you want to store or edit in mongodb
                "name": req.body.name,
                "surname": req.body.surname, }, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ message: "record scuccessful" });
                }
            });
        }
    });
});
exports.default = insert;
//to insert we have predefined function
