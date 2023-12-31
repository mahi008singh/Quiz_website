const mongoose=require("mongoose")

const connectDB= async(mongo_url)=>{
    try{
        const DB_options={
            dbname:"prepquizDatabase"
        }
        await mongoose.connect(mongo_url,DB_options)
        console.log("database connected successfully");
    }
    catch(err){
        console.log(err)
    }
}


module.exports={connectDB};