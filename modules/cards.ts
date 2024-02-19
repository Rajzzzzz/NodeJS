import * as express from "express";

//create the module
let cards:any = express.Router();

//create the get request
cards.post("/",(req:any,res:any):any=>{
    res.status(200).json({"message":"welcome to cards module"});
});

//export the module
export default cards;