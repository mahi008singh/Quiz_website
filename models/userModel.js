const mongoose  = require("mongoose");
const jwt=require('jsonwebtoken')
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
    },
    is_verified:{
        type:Number,
        default:0
    }
    
})

userSchema.methods.generateToken= async function(){
    try{
            return jwt.sign({
                userId: this._id.toString(),
                email:this.email,
                isAdmin:this.is_admin
            },
            process.env.JWT_KEY,
                {
                    expiresIn:"30s"
                }
            );
    }catch(err){
        console.log(err)
    }
}
const userModel=mongoose.model("userRegister",userSchema)

module.exports=userModel