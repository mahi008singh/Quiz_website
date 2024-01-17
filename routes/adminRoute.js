const express=require('express')
const adminrouter=express.Router();

const {getAllUsers,uploadQues,deleteUser,postcontactMsg,getContactmsg,deletecontactMsg} =require('../controllers/adminController')

adminrouter.get('/getUsers',getAllUsers)

adminrouter.post('/uploads',uploadQues)

adminrouter.delete('/delete/:id',deleteUser)

adminrouter.post('/postcontactmsg',postcontactMsg)
adminrouter.get('/getcontactmsg',getContactmsg)
adminrouter.delete('/deleteMsg/:id',deletecontactMsg)


module.exports=adminrouter