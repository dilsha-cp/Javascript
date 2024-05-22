//find return the first element that return the condition
const transaction=[100,200,3000,-898,-3800,-4500]
const widrow=transaction.find((n)=>{
    return n<0
})
console.log(widrow)
//findindex
const windex=transaction.findIndex((n)=>{
    return n<0
})
console.log(windex)