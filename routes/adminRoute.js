const express=require('express')
const adminrouter=express.Router();

const getAllUsers =require('../controllers/adminController')

adminrouter.get('/getUsers',getAllUsers)

module.exports=adminrouter