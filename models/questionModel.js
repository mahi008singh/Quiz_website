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
   
    // topic:{
    //     type:String,
    //     require:true
    // },
    // companyTag:{
    //     type:String,
    //     require:true,
    //     default:0
    // }
})

const quesModel=new mongoose.model("questionStore",quesSchema)

module.exports=quesModel