import express from 'express';
const app=express();
app.get('/',(req,res)=>{
    res.send("Hello this is default path");
});
app.get('/users',(req,res)=>{
    res.send("this is from users");
});
app.listen(7002,()=>{
    console.log("server running at http://localhost:7002");
});