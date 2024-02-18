//to encapsulate two modules created till now i.e, accounts and transactions

import * as express from "express";
//to import transaction module
import transactions from "./transactions";
//to import the account module 
// this two module are custom module
import accounts from "./account";

let app:any = express();
app.use("/module1",transactions);
app.use("/module2",accounts);
app.listen(8080,()=>{
    console.log("server started");
});

//http://localhost:8080/moduele1
//http://localhost:8080/module1/raj
//http://localhost:8080/module2  (GET)
//http://localhost