//express is the module for creating rest services (post,get,put,delete...)
//all the modules are download to "node_modules" folder in current path.

let express = require("express");
//create the rest object 
let app = express(); //to create the rest app(app object) that have rest services

//to create get request
app.get("/",(req,res)=>{//("/")this is used for default url parameters
    //two arguement patters are there one is url patter and other is callback function i.e,(req,res)
    res.status(200).json({"message":"default get request.....!"});//send response back to client with status
    //200 means ok (not mandatory but recommended)
});
app.get("/demo",(req,res)=>{
    res.status(200).json({"message":"data from mongodb data sooon....!"});
});
app.post("/",(req,res)=>{
    res.status(200).json({"message":"default post request.....!"});
});

app.post("/demo",(req,res)=>{
    res.status(200).json({"message":"data from alld. database soon....!"});
});

app.listen(8080,()=>{
    console.log("server started");
});//we can use any port number

//http://localhost:8080/ (get) (post)
//http://localhost:8080/demo (get) (post)
//now go to the postman and check this services using url(postman is the frontend technologies)
