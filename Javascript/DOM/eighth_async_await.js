async function getdata(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            resolve("Wait......");
        },4000)
    })
}

async function product(){

    console.log("Wait for OTP")

    let a = await getdata();

    console.log(a)

    console.log("Your OTP IS : 2412")

}

product();