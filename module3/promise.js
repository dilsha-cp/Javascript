let mypromis=new Promise(function(resolve,reject){
    let a=9
    let b=8
    setImmediate(()=>{
        if(a==b){
            resolve("equal")
        }else{
            reject('not equal')
        }

    },1000)
})
//to show pendding
console.log(mypromis)
//to show fullfill result
mypromis.then(function(result){
    console.log(result)
})//here the then and resolve is connected and that message will printed.in this argument is given by any word it accept the
//message of resolve
//similerly for reject method catch is used
mypromis.catch(function(errresult){
    console.log(errresult)
})

