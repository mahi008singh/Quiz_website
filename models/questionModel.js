const mongoose=require('mongoose')

const quesSchema=new mongoose.Schema({
    question:{
        type:String,
        require:true,
        unique:true
    },
    optionA:{
        type:String,
        require:true,
    },
    optionB:{
        type:String,
        require:true,
    },
    optionC:{
        type:String,
        require:true,
    },
    optionD:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    subcategory:{
        type:String,
        require:true,
    },
    tag:{
        type:String,
        default:"none"
    },
    answer:{
        type:String,
        require:true
    },
    companyName:{
        type:String,
        default:''
    }
})

const quesModel=new mongoose.model("questionStore",quesSchema)

module.exports=quesModel