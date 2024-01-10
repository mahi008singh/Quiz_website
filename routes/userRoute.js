const express=require('express')
const userrouter=express.Router()
const authMiddleware =require('../middleware/userAuthMiddleware')

const {userRegister,userLogin,userDetail} =require('../controllers/userController')

userrouter.post('/register',userRegister);
userrouter.post('/login',userLogin);

userrouter.get('/userdetail',authMiddleware,userDetail);


module.exports=userrouter;