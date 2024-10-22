const Regester =require("../Modul/regester");
const bcrypt =require("bcrypt");

exports.regester=async (req,res)=>{
    
        const {firstName,LastName,Password,Mail} = req.body ;
        const passs =await bcrypt.hash(Password,7)

    const email =await Regester.findOne({Mail})
    if(email){
        res.status(400).json("this email is used aleardy")
    } 
    else{
        const reg =await Regester.create({firstName,LastName,Password:passs,Mail});
        res.json({msg :"data regested done"})
    }
    
    
} 
exports.login=async(req,res)=>{

    const {Password,Mail} =req.body
    const modul =await Regester.findOne({Mail});
    if(modul){
        const comp =await bcrypt.compare(Password ,modul.Password);
        if(comp){
            res.status(200).json("done")
        }
        else{
            res.status(400).json("error password ")

        }
    }
    else{
        res.status(400).json("Not found this mail")
    }
} 
exports.Forget=async(req,res)=>{

    const {Mail ,NewPassword ,confirmpassword} =req.body
    if(NewPassword!==confirmpassword){
        res.status(400).json("error")
    }
    
    else{
        const modul =await Regester.findOne({Mail});
        if(!modul){
        
            res.status(400).json("Not found this mail")
        }
    else{    
        const bcrptpass =await bcrypt.hash(NewPassword,7);
        modul.Password =bcrptpass;
        await modul.save();
        res.status(200).json("done")

    }
    } 
    
} 


 