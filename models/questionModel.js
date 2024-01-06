const mongoose=require('mongoose')

const quesSchema=new mongoose.Schema({
    question:{
        type:String,
        require:true
    },
    option:{
        
    }
})