const mongoose  = require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true
    },
    is_admin:{
        type:Number,
        default:0
    }
    
})

const userModel=mongoose.model("userRegister",userSchema)

module.exports=userModel