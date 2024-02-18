"use strict";
//to encapsulate two modules created till now i.e, accounts and transactions
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//to import transaction module
var transactions_1 = require("./transactions");
//to import the account module 
// this two module are custom module
var account_1 = require("./account");
var app = express();
app.use("/module1", transactions_1.default);
app.use("/module2", account_1.default);
app.listen(8080, function () {
    console.log("server started");
});
//http://localhost:8080/moduele1
//http://localhost:8080/module1/raj
//http://localhost:8080/module2  (GET)
//http://localhost
