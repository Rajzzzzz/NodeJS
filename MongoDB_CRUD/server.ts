//server.ts file used to collaborate the custom modules
//@fetch @remove @insert @update 
//server.ts file is the main server file
//node will start the execution from "server.ts" file

import * as express from "express";

import * as cors from "cors";

import * as bodyparser from "body-parser";

//to import all module
import fetch from "./fetch(get)/fetch";
import insert from "./insert(post)/insert";
import update from "./update(put)/update";
import remove from "./remove(delete)/remove";

//prepare rest object
let app :any = express();
//to enable cors policy
app.use(cors());

//set the mime type
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));//it reads if form contain json data

//use the module
app.use("/fetch",fetch);
app.use("/insert",insert);
app.use("/update",update);
app.use("/remove",remove);


app.listen(8080,()=>{
    console.log("server started");
});