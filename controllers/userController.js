const userModel=require('../models/userModel')
const bcrypt=require('bcrypt');


async function userRegister(req,res){
    const {name,email,password}=req.body;
 
    const hashedPassw=await bcrypt.hash(password,10);
    const signupStatus= await userModel.create({
        name:name,
        email:email,
        password:hashedPassw,
        is_admin:0
    })

    res.send(req.body)

}
async function userLogin(req,res){
    const {email,password}=req.body;

    const userData=await userModel.findOne({email:email})
    const isMatch=await bcrypt.compare(password,userData.password);
    if(isMatch){
        console.log("success login")
        // res.redirect('/')
    }else{
        console.log("invalid")
    }
    console.log(req.body) 

}
module.exports={
    userRegister,
    userLogin
}