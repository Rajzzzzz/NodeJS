import * as express from "express";

import * as mongodb from "mongodb";

let NodeJS:any = mongodb.MongoClient;

let update:any = express.Router().put("/",(req:any,res:any):any=>{
    NodeJS.connect("mongodb+srv://khushisrivastavaahq:sasta@123@cluster0.mongodb.net/explorer/NodeJS/accounts?retryWrites=true&w=majority",(err:any,connection:any):any=>{
        if(err) throw err;
        else{
            let db = connection.db("NodeJS");
            db.collection("accounts").updateOne({id:req.body.id},  //updateOne is also predefined functiion
                                                {$set:{limit:req.body.limit,account_id:req.body.account_id}}, //$ - predefined operator that used to set what is to be updated based on id
                                                (err:any,result:any)=>{
                                                    if(err) throw err;
                                                    else{
                                                        res.send({message:"record updated successfully !!!!"}); //res. back to customer
                                                    }
                         });
        }


    });
});


export default update;