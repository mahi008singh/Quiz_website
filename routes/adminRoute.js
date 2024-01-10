const express=require('express')
const adminrouter=express.Router();

const {getAllUsers,uploadQues} =require('../controllers/adminController')

adminrouter.get('/getUsers',getAllUsers)

adminrouter.post('/uploads',uploadQues)

module.exports=adminrouter