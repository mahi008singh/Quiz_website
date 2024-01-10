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

    res.status(200).json({
        msg:"registration successfull",
        token:await signupStatus.generateToken(),
        userId:signupStatus._id.toString()
    })

} 

async function userLogin(req,res){
    const {email,password}=req.body;
    try{
        
    const userData=await userModel.findOne({email:email})
    //fetching the data from mongodb
    const isMatch=await bcrypt.compare(password,userData.password);

    if(userData&&isMatch){
        console.log("success login")
    
        res.status(201).json({
            msg:userData,
            token: await userData.generateToken(),
            userId:userData._id.toString()
        })

    }else{
    
        res.status(401).json({msg:"Invalid email or password !!"})
    }
    
    }catch(err){
        console.log(err)
    }

}

 const userDetail=async (req,res)=>{
    try{
        const userData=req.userDetails;
        console.log(userData)
        res.status(200).json(userData)
    }catch(err){
        console.log(`error from the userdetail route ${err}`)
    }
}
module.exports={
    userRegister,
    userLogin,
    userDetail
}