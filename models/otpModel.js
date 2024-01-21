const mongoose=require('mongoose')

const otpSchema=new mongoose.Schema({
    email:String,
    otpcode:String,
    expireIn:Number
},{
    timestamps:true
})

const otpModel=mongoose.model('otpTable',otpSchema)

module.exports=otpModel