import * as express from "express";

//create the module
let transactions:any = express.Router();

const auth1:any = (req:any,res:any,next:any):any=>{
    let allHeaders:any = req.headers;
    let token = allHeaders.token;
    if(token == "giri"){
        next();
    }else{
        res.status(201).json({"auth1":"failed"});
    }
};

const auth2:any = (req:any,res:any,next:any):any=>{
    let allHeaders:any = req.headers;
    let wish = allHeaders.wish;
    if(wish == "abc123"){
        next();
    }else{
        res.status(201).json({"auth1":"failed"});
    }
};
//create the get request
transactions.get("/",[auth1,auth2],(req:any,res:any):any=>{
    res.status(200).json({"message":"welcome to transactions module"});
});

transactions.get("/login",(req:any,res:any):any=>{
    if(req.query.uname == "raj" && req.query.upwd == "raj"){
    res.status(201).json({"login":"success"});
    }else{
        res.status(401).json({"login":"fail"});
    }
});


//export the module
export default transactions;