//http server with the help of http module
//its the predefined module so no need to download it 


//to import the module we use require() function
let http = require("http"); //let http is used to return http

// to create server we use createServer()

let server = http.createServer((req,res)=>{ //here we are creating http server
    res.write("Hey There My New Server");//writing on the server
    res.end();//lock the response object
}); 
//if we had to create the tcp server than we will use tcp there
//this is taking an arguement that is request & response


server.listen(8080);//to assign server a port number
console.log("server is running on port 8080");
//now to start the server open terminal and give command "node file name"
//to check on browser go to http://localhost:8080