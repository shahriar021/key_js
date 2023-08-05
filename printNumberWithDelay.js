
//var vs let  

function delay(i){
    return new Promise(resolve=>{
        setTimeout(() => {
          resolve(i);
        }, i * 1000);
    })
}










 async function printNumberWithDelay(n){
    console.log("start");
    for(let i=0;i<=n;i++){
         result = await delay(i);
         console.log(result);
    }
    console.log("end");
}



printNumberWithDelay(3)



//var hocche function scope

//let hocche block scope mane{} er moddhe jodi kono variable declare kori tahole oi variable ta oi block er baire kaj korbe na