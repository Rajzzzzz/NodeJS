//create the sub module
import * as express from "express";

//create transaction module
let transactions:any = express.Router();//router is the predefined function in express

transactions.get("/",(req:any,res:any)=>{
    res.status(200).json({message:"transaction soon...!"});
});

transactions.get("/raj",(req:any,res:any)=>{
    res.status(200).json({message:"welcome to raj for nodejs"});
});
//to export transaction module
export default transactions;
