//import express module 
import * as express from "express";
//create the rest object 
let app:any = express();
//app object use to develope the rest services
//Ex. GET,POST,DELETE....

//get request
app.get("/raj",(req:any,res:any):any=>{
    res.status(200).json({"message":"welcome to ts with nodejs"});
});
//assign the port no.
app.listen(8080,()=>{
    console.log("server starter");
});

//to convert ts file to js file we use commend tsc 03_express.ts
//express @types/express =====> compatible libraries to develope node js with typescript