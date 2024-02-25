/*import * as express from "express";

import * as bodyparser from "body-parser";

import * as cors from "cors";

import * as mongoose from "mongoose";*/

let express = require("express");
//let bodyparser = require("body-parser");
let mongoose = require("mongoose");
//let cors = require("cors");
//create rest object
let app= express();
//enable cors policy
/*app.use(cors());
//set the json as MIME type
app.use(bodyparser.json());
//parse the client data 
app.use(bodyparser.urlencoded({extended:false}));*/

//replace from gpt (https://chat.openai.com/c/125fbbf3-6a3a-4995-853c-2ae0497032db)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connect to database
mongoose.connect("mongodb+srv://rajeshwarraj:0QYJCcOElWDKlYV7@cluster0.7w2kw0g.mongodb.net/Mongoose?retryWrites=true&w=majority&appName=Cluster0",{useNewUrlParser:true});


//define and initialize the schema

const EmployeeSchema = new mongoose.Schema({
    e_id:Number, //id should contain number
    e_name:String, //name should contain string
    e_sal:Number //salary should be number
});
//apply above schema to database using mongoose
//const Model = mongoose.model;
const Employee = mongoose.model("Employee",EmployeeSchema); //to set the database name(Employee table) in mongoose db

app.post("/Mongoose",(req,res)=>{ //here Mongoose is the main db where post insertion is performing
    const newRecord = new Employee({
        e_id : req.body.e_id,
        e_name : req.body.e_name,
        e_sal : req.body.e_sal
     });
     newRecord.save() //to save the record we use save()
        .then(result => {
            res.status(200).json({insert:"success"});
        })
        .catch(err => {
            throw err;
        });
});

/*app.get("/Mongoose",(req,res)=>{ //this was older version
    Employee.find({},(err,docs)=>{
        if(err) throw err;
        else{
            res.send(docs);
        }
    });
});*/

//latest to get by gpt is (https://chat.openai.com/c/004bd5df-7b1d-452b-b7c1-0272e7d61d5f)
app.get("/Mongoose", (req, res) => {
    const query = Employee.find({});
    query.then((docs) => {
      res.send(docs);
    }).catch((err) => {
      throw err;
    });
  });
  
app.listen(8080,()=>{
    console.log("server started successfully !!");
});

//now to test go to the postman and follow this 
// type /Mongoose
// go to the body and add
/* {
    "e_id":222,
    "e_name":"e_one",
    "e_sal":2000
} */