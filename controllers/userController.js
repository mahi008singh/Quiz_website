const userModel=require('../models/userModel')
const bcrypt=require('bcrypt');
const otpModel=require('../models/otpModel')
const nodemailer=require('nodemailer')


async function userRegister(req,res){
    const {name,email,password}=req.body;
 
    const hashedPassw=await bcrypt.hash(password,10);
    const signupStatus= await userModel.create({
        name:name,
        email:email,
        password:hashedPassw,
        is_admin:0
    })
    verificationMail(name,email,signupStatus._id)

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
        // res.cookie(String(userData._id),jwtToken,{
        //     path:'/',
        //     expires:new Date(Date.now()+1000*30),
        //     httpOnly:true,
        //     sameSite:"lax"
        // })
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
        console.log("*inside***userDetail--> "+userData)
        res.status(200).json(userData)
    }catch(err){
        console.log(`error from the userdetail route ${err}`)
    }
}


//----------------------((otp-generation))-----------------------

const generateOtp=async(req,res)=>{
    let userData=await userModel.findOne({email:req.body.email});
    const response={};
    if(userData){
        let otpCode=Math.floor(Math.random()*(10000-1000)+1000)
        let otpData=new otpModel({
            email:req.body.email,
            otpcode:otpCode,
            expireIn:new Date().getTime()+300*1000
        })
        mailer(req.body.email,otpCode)
        let otpResponse=await otpData.save();
        response.status="Success"
        response.msg="Please check your email for OTP"
    }else{
        response.status="Error"
        response.msg="Email id not exists"
    }
    res.status(200).json(response)
}

// controller to generate new() password
const changePassword=async(req,res)=>{
    let data=await otpModel.find({email:req.body.email,otpcode:req.body.otpcode})
    
    const response={};
    try {
        if(data.length!=0){
            console.log("otp",data)
            let currentTime=new Date().getTime();
            let diff=data.expireIn-currentTime;
            // if(data.otpcode!=req.body.otpcode){
            //     response.msg="Invalid otp",
            //     response.status="Regnerate the otp again"
            // }
            if(diff<0){
                response.msg="Token expire",
                response.status="error"
            }else{
                let user=await userModel.findOne({email:req.body.email})
                user.password= await bcrypt.hash(req.body.password,10);
                user.save();
                response.msg="password changed successfully";
                response.status="Success";
                await otpModel.deleteMany({});
            }
        }else{
            response.msg="Invalid otp".
            response.status="Error occured!"
        }
        
    } catch (error) {
        console.log(error)
    }
    res.status(200).json(response);

}

const mailer=(email,otp)=>{
    let transporter=nodemailer.createTransport({
        service:'gmail',
        port:587,
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASS
        }
    });
    let mailOptions={
        from:"mahi22singh55@gmail.com",
        to:email,
        subject:"Email from prepquizz ",
        text:`your one time password (OTP): ${otp}`
    };
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error)
        }else{
            console.log("Email sent:"+ info.response)
        }
    });
}

//*********************************************** */
// route for sending the verification mail of the user
const verificationMail=(name,email,id)=>{
   
    let transporter=nodemailer.createTransport({
        service:'gmail',
        port:587,
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASS
        }
    });
    const siteURL="http://localhost:5500"||"https://prepquizz.onrender.com"
    let mailOptions={
        from:"mahi22singh55@gmail.com",
        to:email,
        subject:"Email from prepquizz for Email verification ",
        html:`<p>Hii ${name}, please click here to <a href="${siteURL}/userAuth/verifyuser?id=${id}">verify</a> your email ${email}</p>`
    };
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error)
        }else{
            console.log("Email sent:"+ info.response)
        }
    });
}

const verifyMail=async(req,res)=>{
        try {

            const updateInfo=await userModel.updateOne({_id:req.query.id},{$set:{is_verified:1}});
            console.log(updateInfo)
            res.status(200).json("email has been verified !!")
            
        } catch (error) {
            res.status(400).json({error:error})
            console.log(error)
        }
}
module.exports={
    userRegister,
    userLogin,
    userDetail,
    generateOtp,
    changePassword,
    verifyMail
}