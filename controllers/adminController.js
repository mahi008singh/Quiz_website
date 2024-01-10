const Users=require('../models/userModel')
const quesModel=require('../models/questionModel')
async function getAllUsers(req,res){
        try{
                const userData=await Users.find({},{password:0});
                console.log(userData)
                if(!userData||userData.length===0){
                 res.json({msg:"NO users present"})
                }
                 res.json(userData)
                
        }catch(err){
            console.log(err)
        }

}
async function uploadQues(req,res){
        try {
              const {question,optionA,optionB,optionC,optionD,answer}=req.body; 
              await quesModel.create({
                question:question,
                optionA:optionA,
                optionB:optionB,
                optionC:optionC,
                optionD:optionD,
                answer:answer
              }) 
                
        } catch (error) {
                console.log(error)
        }
}
module.exports={
        getAllUsers,
        uploadQues
}