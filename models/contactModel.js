const mongoose=require('mongoose');

const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    msg:{
        type:String,
        required:true
    },
    date:{
        type:String,
        default:Date.now(),
    }
})

const contactModel=mongoose.model("contactDetail",contactSchema);

module.exports=contactModel;