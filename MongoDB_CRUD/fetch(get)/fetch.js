"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//import mongodb module to connect mongodb database
var mongodb = require("mongodb");
//create the client 
//mongodb follows the "client server" architecture
var NodeJS = mongodb.MongoClient; //to create client (sample is client)
//sample is the client here 
//create the module(fetch is the name of the module) with the help of router function
var fetch = express.Router().get("/", function (req, res) {
    NodeJS.connect("mongodb+srv://khushisrivastavaahq:sasta@123@cluster0.i71l2zt.mongodb.net/NodeJS?retryWrites=true&w=majority&appName=Cluster0", function (err, connection) {
        if (err)
            throw err; //if client fails to connect with mongodb (to handle error)
        else { //if connection success 
            var db = connection.db("NodeJS"); //sample_analytics is the reference in the database
            db.collection("accounts").find().toArray(function (err, array) {
                if (err)
                    throw err; // if fails to store the array 
                else { // if success to store the array
                    res.send(array); //this stored array will send to the customer (maybe client)
                }
            });
        }
    });
});
//export the module
exports.default = fetch;
