const exp =require("express");
const {regester,login, Forget} =require("../controler/control");
const rout =exp();

rout.post("/regester",regester);
rout.post("/login",login);
rout.post("/forget",Forget);


 

  
module.exports =rout ;