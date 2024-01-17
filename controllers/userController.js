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


//------------------------(Login controller)------------------------
//------------------------------------------------------------------

async function userLogin(req,res){
    const {email,password}=req.body;
    try{
        
    const userData=await userModel.findOne({email:email})
    //fetching the data from mongodb
    if(!userData){
        return res.json({msg:"not a registered user"})
    }
    const isMatch=await bcrypt.compare(password,userData.password);
  
    if(userData&&isMatch){
        const jwtToken=await userData.generateToken();
        console.log("success login")
        res.cookie(String(userData._id),jwtToken,{
            path:'/',
            expires:new Date(Date.now()+1000*30),
            httpOnly:true,
            sameSite:"lax"
        })
        return res.status(201).json({
            msg:"Logged in successfully",
            user:userData,
            token:jwtToken ,
            userId:userData._id.toString()
        })
    }
    else{
        res.status(401).json({msg:"Invalid email or password !!"})
    } 
    
    }catch(err){
        console.log(err)
    }

}

// -------------------(userDetails)----------------------------
//-------------------------------------------------------------


 const userDetail=async (req,res)=>{
    try{
        const userData=req.user;
        console.log("inside userDetail--> "+userData)
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