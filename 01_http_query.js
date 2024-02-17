//import htttp module 
let http = require("http");

//to import url module 

let url = require("url");

//to create the server 
let server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});//commmunication lang. - content type
    
    let obj = url.parse(req.url,true).query;//to read property use query,bollean value to parse the url we use true

    if(obj.uname === "raj" && obj.upwd === "raj"){
        res.write("login success");
    }else{
        res.write("login fail");
    }
    res.end();
});

server.listen(8080);
console.log("its listening port 8080");
//mime is the common this between two
//how to set mime type - communication language between client and server
//status code that are 1xx, 2xx, 3xx, 4xx,