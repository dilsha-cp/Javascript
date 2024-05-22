function Firstname(firstname,cb){
    console.log(firstname)
    cb('basheer')
}
function Lastname(lastname){
    console.log(lastname)
}
Firstname('dilsha',Lastname)


const iseven=(n)=>{
    return n%2==0
}
const check=(evenFn,num)=>{
    let evenNum=evenFn(num)
    console.log(`the number ${num} is ${evenNum}  even Number  `)

}
check(iseven,11)
check(iseven,10)