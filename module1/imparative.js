

//imarative way of writing code

const a=4
const squr=a*a
let isEven
if(squr%2==0){
    isEven=true
}
else{
    isEven=false
}
console.log(isEven)
//declarative
const squrroot=(x)=>(x*x%2==0?true:false)
console.log(squrroot(5))
//normal function
function sqr(x){
    return x*x
}
let b=sqr(5)
console.log(b)