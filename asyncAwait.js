function getUserDetails(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({userroll:"6181"})
        }, 2000);
    })
};
const myfun=async()=>{
    console.log("123")
    const res=await getUserDetails("123");
        console.log(res);
        console.log("456")
};
myfun();