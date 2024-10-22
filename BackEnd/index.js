const exp =require("express");
const cors =require("cors");
const Ddmongo =require("./db/dataBase")
const rout =require("./Routs/rout")


const app = exp();

app.use(exp.json());
app.use(exp.urlencoded({extended :true}));

app.use(
    cors({
        origin:  "http://localhost:3001", 
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        credentials: true,
    })
)

// Routs

app.use("/api",rout);
 


app.listen(3000,()=>{
    try{
        Ddmongo();
        console.log("Connected ");
    }
    catch{
        console.log("error");
    }
   
} 
)