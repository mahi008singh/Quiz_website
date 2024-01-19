const express=require('express')
const adminrouter=express.Router();

const {getAllUsers,uploadQues,deleteUser,postContactMsg,getContactmsg,deleteContactMsg} =require('../controllers/adminController')

adminrouter.get('/getUsers',getAllUsers)

adminrouter.post('/uploads',uploadQues)

adminrouter.delete('/delete/:id',deleteUser)

adminrouter.post('/postcontactmsg',postContactMsg)
adminrouter.get('/getcontactmsg',getContactmsg)
adminrouter.delete('/deleteMsg/:id',deleteContactMsg)


module.exports=adminrouter