/*const mypromise=new Promise((resolve,reject)=>{
    let username="sub";
    let passward="1234";
    if(username=="sub" && passward=="1234"){
        resolve("success");

    }
    else{
        reject("invalid");
    }

})
// console.log(mypromise);
// mypromise.then((msg)=>{console.log(msg)})
// .catch(msg=>{console.log(msg)})
// .finally(console.log("Resource closed"))
async function orderRequest(){
    return await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve ("one order recieved");
        },1000)
    })
} 
async function orderPrepared(){
    return await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("order Prepared");
        },1000)
    })}



async function orderhandover(){
    return await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("order is handover");
        },1000)
    })

}
async function ordercompleted(){
    console.log("Order Successfully Completed");
}
let votp
function otp(){
    votp= Math.floor( Math.random()*10000);
    return votp;
 }
 function verifyOTP(userOTP) {
    if (userOTP == votp) {
        console.log("OTP Verified");
    } else {
        console.log("Wrong OTP");
    }
}

otp();

console.log("Generated OTP:", votp);
let userOTP = 1234;

verifyOTP(userOTP);
async function handlelogin(){
    const status=await mypromise;
    console.log(status)
    if(status=="success"){
        console.log("HI success");
    
    const orederstatus=await orderRequest();
    console.log(orederstatus);
    const orderPreparedstatus=await orderPrepared();
    console.log(orderPreparedstatus);
    const orderhandoverstatus=await orderhandover();
    console.log(orderhandoverstatus);
    const ordercompletestatus =await ordercompleted();
    console.log(ordercompletestatus);
    const myotp = otp();
    console.log("Your OTP:", myotp);
    }
}
handlelogin(); */



