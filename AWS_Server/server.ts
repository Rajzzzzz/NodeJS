import * as express from "express";

//create the rest object

let app:any = express();

//create the get request
app.get("/",(_req:any,res:any)=>{
    res.status(200).json({"message":"welcome to demo1 request"});
})

let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("server started");
});