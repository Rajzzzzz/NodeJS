//http://localhost:8080/login?uname=raj&upwd=raj
import * as express from "express";

let app:any = express();

//token verification(authorisation)
//if token is present than only should be authorised
//before login we should perform authorisation

//authorization
let auth = (req:any,res:any,next:any):any=>{ //next function is for judgement that auth success
    let allHeaders = req.headers;
    if(allHeaders.token == "rajgiri"){
        next();
    }else{
        res.status(500).json({auth:"fail"}); //to terminate 
    };
};

//now to check authorisation
//we need go to the postman and there we have to set the headers key to token 
//and value to raj than only will show the success 

//get request
app.get("/login",[auth],(req:any,res:any)=>{ // this set of code can be called as authentication
    if(req.query.uname == "raj" && req.query.upwd === "raj"){
        res.status(201).json({login:"success"});
    }else{
        res.status(401).json({login:"fail"});
    };
});

//default request
app.get("/",(req:any,res:any):any=>{
    res.sendFile("/Users/rajeshwarkumargiri/Documents/NodeJS/NodeJS/getparameters/index.html");
});
app.listen(8080,()=>{
    console.log("server starter");
});