import express from 'express';
const getStudentDetails=(req,res)=>{
    const mydata={name:"thub",roll:"23A91A6181"};
    res.send(mydata);
};
const addStudents=(req,res)=>{
    const data=req.body;
    console.log(data);
    res.send("data added");
};
export{getStudentDetails,addStudents};

