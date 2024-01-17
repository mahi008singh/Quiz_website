const jwt=require('jsonwebtoken')
const userModel=require('../models/userModel')

const authMiddleware= async (req,res,next)=>{
        const header=req.headers['authorization']
        const jwtToken=header.split(" ")[1];
        if(!jwtToken){
            return res.status(404).json({msg:"Token not provided"})
        }

        
        console.log("token from auth middleware-->",jwtToken)

        try{
                const isVerified=jwt.verify(String(jwtToken),process.env.JWT_KEY);
                const userData=await userModel.findOne({email:isVerified.email}).select({
                    password:0,
                });
                console.log("userData->>",userData)

                req.user=userData;
                req.token=jwtToken;
                req.userId=userData._id;

                next();

        }catch(err){
            console.log("authMiddleware --> ",err)
            res.status(401).json({msg:err})
        }

}

module.exports=authMiddleware