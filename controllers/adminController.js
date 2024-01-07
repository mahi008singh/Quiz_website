const Users=require('../models/userModel')

async function getAllUsers(req,res){
        try{
                const userData=await Users.find({},{password:0});
                console.log(userData)
                if(!userData||userData.length===0){
                 res.json({msg:"NO users present"})
                }
                 res.json(userData)
                
        }catch(err){
            console.log(err)
        }

}
module.exports=getAllUsers