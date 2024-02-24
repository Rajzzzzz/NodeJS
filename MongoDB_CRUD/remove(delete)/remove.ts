import * as express from "express";

import * as mongodb from "mongodb";

let NodeJS:any = mongodb.MongoClient;


let remove:any = express.Router().delete("/",(req:any,res:any):any=>{
    NodeJS.connect("mongodb+srv://khushisrivastavaahq:sasta@123@cluster0.mongodb.net/explorer/NodeJS/accounts?retryWrites=true&w=majority",(err:any,connection:any)=>{
        if(err) throw err;
        else{
            let db = connection.db("NodeJS");
            db.collection("accounts").deleteOne({"id":req.body.id},(err:any,res:any)=>{  //this id is coming from the angular application
                if(err) throw err;
                else{
                    res.status(200).json({message:`${req.body.id} record deleted success`});
                }
            });
        }
    });
}); 

export default remove;

