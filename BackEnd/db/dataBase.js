const mongoos = require("mongoose");

const Ddmongo =async ()=>{
    const mongo = await mongoos.connect("mongodb://localhost:27017");
    console.log("done");
}

module.exports = Ddmongo; 