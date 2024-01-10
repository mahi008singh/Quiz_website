require('dotenv').config()
const express=require('express');
const cors=require('cors')
const app=express();
const path= require('path');
const bcrypt=require('bcrypt')
const {connectDB}=require('./db/connectDB.js');
const userrouter=require('./routes/userRoute.js')
const adminrouter=require('./routes/adminRoute.js')

app.use('/public',express.static('public'))
app.use('/images',express.static('images'))
app.set("view engine","ejs")
app.use(cors());
app.use(express.json()); //parse the incoming JSON data to object
app.use(express.urlencoded({extended:true}))

//routes->

app.use('/userAuth',userrouter)
app.use('/adminpage',adminrouter)


//----------(code for serving the frontend)--------------


app.use(express.static(path.join(__dirname,"./frontend/build")));
app.get("*",(req,res)=>{
    res.sendFile(
        path.join(__dirname,"./frontend/build/index.html"),
        (err)=>{
            res.status(500).send(err);
        }
    );
})

//--------------------(end of this)----------------------



//connecting the database....

 const db_url=process.env.MONGO_URL
 connectDB(db_url)
 
const port=process.env.PORT||5500;
app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})