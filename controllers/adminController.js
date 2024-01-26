const Users=require('../models/userModel')
const quesModel=require('../models/questionModel')
const contactModel=require('../models/contactModel');
const { response } = require('express');

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
              const {question,optionA,optionB,optionC,optionD,category,answer}=req.body;
              console.log(req.body)
              let respData=await quesModel.create({
                question:question,
                optionA:optionA,
                optionB:optionB,
                optionC:optionC,
                optionD:optionD,
                category:category,
                answer:answer
              }) 

              res.json("uploaded successfully !!")
                
        } catch (error) {
                console.log(error)
        }
}

async function getuploadQues(req,res){
        try {
              const getQuesdata=await quesModel.find()
              if(!getQuesdata){
                res.json({msg:"No data present"})
              }
              res.json(getQuesdata)
                
        } catch (error) {
                console.log(error)
        }
}

async function postContactMsg(req,res){
        try {
                const {name,email,msg}=req.body
                await contactModel.create({
                       name:name,
                       email:email,
                       msg:msg ,

                })
                console.log(name,email,msg)
                res.json("msg sent successfully")
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

async function deleteContactMsg(req,res){
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
        getuploadQues,
        deleteUser,
        postContactMsg,
        getContactmsg,
        deleteContactMsg
}