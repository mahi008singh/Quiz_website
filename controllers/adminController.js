const Users=require('../models/userModel')
const quesModel=require('../models/questionModel')
const contactModel=require('../models/contactModel')

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

// deleting the users by admin

 async function deleteUser(req,res){
        try {
                const id=req.params.id;
                await Users.deleteOne({_id:id})
                res.status(200).json({msg:"user deleted successfully"})
        } catch (error) {
                console.log(error)
        }
 }

//-----------(end)----------
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

async function postcontactMsg(req,res){
        try {
                const {name,email,msg}=req.body
                await contactModel.create({
                       name:name,
                       email:email,
                       msg:msg ,

                })
                console.log(name,email,msg)
        } catch (error) {
                console.log(error)
        }
}

async function getContactmsg(req,res){
        try {
              const contactData=await contactModel.find();
              if(!contactData){
                res.json({msg:"no message present !!"})
              }

              res.json(contactData)
                
        } catch (error) {
                console.log(error)
        
        }
}

async function deletecontactMsg(req,res){
        try {
                const id=req.params.id;
                await contactModel.deleteOne({_id:id})
                res.status(200).json({msg:"user deleted successfully"})
        } catch (error) {
                console.log(error)
        }
 }

module.exports={
        getAllUsers,
        uploadQues,
        deleteUser,
        postcontactMsg,
        getContactmsg,
        deletecontactMsg
}