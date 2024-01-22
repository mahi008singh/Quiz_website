const express=require('express')
const userrouter=express.Router()
const authMiddleware =require('../middleware/userAuthMiddleware')

const {userRegister,userLogin,userDetail,generateOtp,changePassword,verifyMail} =require('../controllers/userController');
const { verify } = require('jsonwebtoken');

userrouter.post('/register',userRegister);
userrouter.post('/login',userLogin);

userrouter.get('/userdetail',authMiddleware,userDetail);

userrouter.post('/generateOtp',generateOtp)
userrouter.post('/changePassword',changePassword)

userrouter.get('/verifyuser',verifyMail) 



module.exports=userrouter;