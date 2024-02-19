import * as express from "express";
import accounts from "./accounts";
import cards from "./cards";
import transactions from "./transactions";

let app:any = express();
app.use("/accounts",accounts);
app.use("/cards",cards);
app.use("/transactions",transactions);

app.listen(8080,()=>{
    console.log("server started");
});

//     http://localhost:8080/accounts
//     http://localhost:8080/accounts/login

//     http://localhost:8080/cards

//     http://localhost:8080/transactions   authorisation i.e, token,wish

//this was how to create the modules and encapsulate them in a single module
//this will need to link with crud operations