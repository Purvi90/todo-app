 
 const mongoose = require("mongoose");

 require("dotenv").config();

 const dbConnect = () =>{
    mongoose.connect(process.env.DATABSE_URL,{
        useNewUrlParser:true,
        useUnifiedToplogy:true,

    })
    .then(()=>{
        console.log("DB successful");
    })
    .catch((error)=>{
        console.log("Issue in Db connected");
        console.error(error.message);
        process.exit(1);
    
    });
 }
 module.exports = dbConnect; 