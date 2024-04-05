const express=require('express')
const adminrouter=express.Router();

const { getAllUsers,uploadQues,deleteUser,postContactMsg,
        getContactmsg,deleteContactMsg,getuploadQues,updateupload
      } =require('../controllers/adminController')

adminrouter.get('/getUsers',getAllUsers)

//routes for uploading and getting the ques

adminrouter.post('/uploads',uploadQues)
adminrouter.get('/getuploads/',getuploadQues)
adminrouter.get('/update',updateupload)

adminrouter.delete('/delete/:id',deleteUser)

adminrouter.post('/postcontactmsg',postContactMsg)
adminrouter.get('/getcontactmsg',getContactmsg)
adminrouter.delete('/deleteMsg/:id',deleteContactMsg)


module.exports=adminrouter