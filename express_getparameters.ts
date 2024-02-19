//read get paramenters in expressjs

/*import * as express from "express";

let app:any = express(); //type of rest object is any

app.get("/login/user/:uname/pwd/:upwd",(req:any,res:any)=>{
    if(req.params.uname === "raj" && req.params.upwd === "raj"){ //we set this if else params for response against url
        res.status(200).json({login : "success"});//to give parameters for successful login if url is correct
    }else{
        res.status(400).json({login : "failed"});//to give response fail if wrong url
    }
    //console.log(req.params);//its not necessary
});

app.listen(8080,()=>{
    console.log("server started on 8080");
});

//http://localhost:8080/login/user/raj/pwd/raj ==> to check the above code

*/

// now for this another type of query get parameter 
// i.e, - http://localhost:8080/login?uname=raj&upwd=raj
//req.qery.uname
//req.query.upwd

import * as express from "express";

let app:any = express(); //type of rest object is any

app.get("/login",(req:any,res:any)=>{//only login wiil we here for this params
    if(req.query.uname === "raj" && req.query.upwd === "raj"){ //we set this if else params for response against url
        res.status(201).json({login : "success"});//to give parameters for successful login if url is correct
    }else{
        res.status(401).json({login : "failed"});//to give response fail if wrong url
    }
    //console.log(req.params);//its not necessary
});

app.listen(8080,()=>{
    console.log("server started on 8080");
});