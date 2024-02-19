import * as express from "express";

//import body-parser module, used to read post parameters
//body-parser module used to read the "post" parameters
import * as bodyparser from "body-parser";

//create rest object 
let app:any = express();

//set the mime type (json is communication lang.)
app.use(bodyparser.json());

//recieve form data from client and parse the data (extended Ex. uname,upwd...)
app.use(bodyparser.urlencoded({extended:false}));//urlencoded means the data coming from client

//authorization code 
let auth:any = (req:any,res:any,next:any):any=>{
    let allHeaders:any = req.headers;
    let token:any = allHeaders.tokens; //any is the datatype
    if(token == "node") {
        next();
    }else{
        res.status(401).json({auth:"fail"});
    }
};


app.post("/login",[auth],(req:any,res:any):any=>{
    if(req.body.uname == "raj"&& req.body.upwd == "raj"){
        res.status(200).json({login:"suceess"});
    }else{
        res.status(401).json({login:"fail"});
    };
});

app.listen(8080,()=>{
    console.log("server start");
});

//now to check above code
//go to postman set header to tokens and value to node
//than go to body click on text and select json
/* and type this {
    "uname":"raj",
    "upwd":"raj"
}
*/
