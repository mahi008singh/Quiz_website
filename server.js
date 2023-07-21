const express=require('express');
const app=express();
const path= require('path');
const bcrypt=require('bcrypt')
const Models=require('./db/collections');
const { Collection } = require('mongoose');

app.use('/public',express.static('public'))
app.use('/images',express.static('images'))

app.use(express.json());
app.use(express.urlencoded({extended:false}))



//code for serving the frontend

app.use(express.static(path.join(__dirname,"./frontend/build")));
app.get("*",(req,res)=>{
    res.sendFile(
        path.join(__dirname,"./frontend/build/index.html"),
        (err)=>{
            res.status(500).send(err);
        }
    );
})
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'views','index.html'))

// })

// app.get('/register',(req,res)=>{
//     res.sendFile(path.join(__dirname,'views','sign_up.html'))
// })

// app.get('/login',(req,res)=>{
//     res.sendFile(path.join(__dirname,'views','student_login.html'))
// })

app.get('/register',(req,res)=>{
    res.send("register page")
})

app.get('/demo',(req,res)=>{
    res.send("demo page");
})




app.post('/register',async (req,res)=>{
     const [name,email,password]=req.body;
    //  const hashedPass= await bcrypt.hash(password,5);
     const userData={
         name:name,
         email:email,
         password:password
     }
     
    try{
       
        const check=await Models.findOne({email:email})
        if(check){
            res.json("email already exist")
        }
        else{
            await Models.insertMany([userData]);
        }
            //    const registration= new  Models({
            //        name:req.body.name,
            //        email:req.body.email,
            //        password:hashedPass
            //    })

            // const registered= await registration.save()
            // res.status(201).redirect('/')
    
      }
      catch(e){
               res.status(400).send(e)            
      }
    
})

app.post('/',async (req,res)=>{
        try{
         email=req.body.email;
         password=req.body.password;
     
         const useremail= await Models.findOne({email:email})
         
         const isMatch= await bcrypt.compare(password,useremail.password);
     
         if(isMatch)
         {
             res.redirect('/');
     
         }
         
         else{
             res.send("invalid credentials try one more time");
          }
     
        }
        catch(e){
                 console.log(e);     
        }
 })



const port=process.env.PORT||5500;
app.listen(port,()=>{
    console.log(`the server started at port ${port}`);
})