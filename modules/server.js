"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var accounts_1 = require("./accounts");
var cards_1 = require("./cards");
var transactions_1 = require("./transactions");
var app = express();
app.use("/accounts", accounts_1.default);
app.use("/cards", cards_1.default);
app.use("/transactions", transactions_1.default);
app.listen(8080, function () {
    console.log("server started");
});
//     http://localhost:8080/accounts
//     http://localhost:8080/accounts/login
//     http://localhost:8080/cards
//     http://localhost:8080/transactions   authorisation i.e, token,wish
