const jwt=require('jsonwebtoken')
const userModel=require('../models/userModel')
const authMiddleware= async (req,res,next)=>{
        const token=req.headers['authorization']
       
        if(!token){
            return res.status(401).json({msg:"Token not provided"})
        }

        const jwtToken=token.replace("Bearer", "").trim();
        console.log("token from auth middleware-->",jwtToken)

        try{
                const isVerified=jwt.verify(jwtToken,process.env.JWT_KEY);
                const userData=await userModel.findOne({email:isVerified.email}).select({
                    password:0,
                });
                console.log("userDAta->",userData)

                req.user=userData;
                req.token=token;
                req.userId=userData._id;

                next();

        }catch(err){
            console.log("authMiddleware --> ",err)
            res.status(401).json({msg:err})
        }

}

module.exports=authMiddleware