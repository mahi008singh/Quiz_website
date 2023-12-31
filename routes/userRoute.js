const express=require('express')
const userrouter=express.Router()

const {userRegister,userLogin} =require('../controllers/userController')

userrouter.post('/register',userRegister);
userrouter.post('/login',userLogin);


module.exports=userrouter;