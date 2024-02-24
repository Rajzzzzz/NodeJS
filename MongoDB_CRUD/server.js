"use strict";
//server.ts file used to collaborate the custom modules
//@fetch @remove @insert @update 
//server.ts file is the main server file
//node will start the execution from "server.ts" file
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var bodyparser = require("body-parser");
//to import all module
var fetch_1 = require("./fetch(get)/fetch");
var insert_1 = require("./insert(post)/insert");
var update_1 = require("./update(put)/update");
var remove_1 = require("./remove(delete)/remove");
//prepare rest object
var app = express();
//to enable cors policy
app.use(cors());
//set the mime type
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false })); //it reads if form contain json data
//use the module
app.use("/fetch", fetch_1.default);
app.use("/insert", insert_1.default);
app.use("/update", update_1.default);
app.use("/remove", remove_1.default);
app.listen(8080, function () {
    console.log("server started");
});
