let hello=()=>{
    console.log('hey')
}
let timer=setInterval(hello,1000)//wile using timeintervel it will goes to infinatily,to set intervel use settimeout and cleareintervel
setTimeout(()=>{
    clearInterval(timer)

},3000)