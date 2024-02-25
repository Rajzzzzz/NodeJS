import * as express from "express";

import * as mongodb from "mongodb";

let NodeJS:any = mongodb.MongoClient;

let insert = express.Router().post("/",(req:any,res:any):any=>{
    NodeJS.connect("mongodb+srv://khushisrivastavaahq:sasta@123@cluster0.i71l2zt.mongodb.net/NodeJS?retryWrites=true&w=majority&appName=Cluster0",(err:any,connection:any):any=>{
        if(err) throw err;
        else{
            let db = connection.db("NodeJS");
            db.collection("accounts").insertOne({"id":req.body.id, //add that much field which you want to store or edit in mongodb
                                                 "name":req.body.name,
                                                 "surname":req.body.surname,},(err:any,result:any)=>{
                if(err) throw err;
                else{
                    res.send({message:"record scuccessful"});
                }
            })
        }
    });
});

export default insert;

//to insert we have predefined function