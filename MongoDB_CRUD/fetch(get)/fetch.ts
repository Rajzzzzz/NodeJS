import * as express from "express";

//import mongodb module to connect mongodb database
import * as mongodb from "mongodb";

//create the client 
//mongodb follows the "client server" architecture
let NodeJS:any = mongodb.MongoClient; //to create client (sample is client)
//sample is the client here 

//create the module(fetch is the name of the module) with the help of router function
let fetch = express.Router().get("/",(req:any,res:any):any=>{//to connect client
    NodeJS.connect("mongodb+srv://khushisrivastavaahq:sasta@123@cluster0.mongodb.net/explorer/NodeJS/accounts?retryWrites=true&w=majority",(err:any,connection:any)=>{
        if(err) throw err;//if client fails to connect with mongodb (to handle error)
        else{//if connection success 
            let db = connection.db("NodeJS"); //sample_analytics is the reference in the database
            db.collection("accounts").find().toArray((err:any,array:any)=>{ // find() used to fetch the data i.e, stored into array using toArray()
                if(err) throw err; // if fails to store the array 
                else{ // if success to store the array
                    res.send(array); //this stored array will send to the customer (maybe client)
                }
            });
        }
    });
});
//export the module
export default fetch;



