const {model , Schema} =require("mongoose");

const schema = new Schema({
    firstName :{
        type:String,
        required : true,
    },
    LastName: {
        type:String,
        required : true,
    },
    Password :{
        type:String,
        required : true,
    },
    Mail :{
        type:String,
        required : true,
    },

})
const Regester =model( "regester",schema)
module.exports =Regester;