import * as express from "express";

//create the module
let accounts:any = express.Router();

//create the get request
accounts.get("/",(req:any,res:any):any=>{
    res.status(200).json({"message":"welcome to accounts module"});
});

accounts.get("/login",(req:any,res:any):any=>{ //http://localhost:8080/accounts/login?uname=raj&upwd=raj
    if(req.query.uname == "raj" && req.query.upwd == "raj"){
    res.status(201).json({"login":"success"});
    }else{
        res.status(401).json({"login":"fail"});
    }
});


//export the module
export default accounts;