//some:check the condition :to get true or false based on a condition
//it will return true if even one element satisfies the condition
const transaction=[-1000,-12455,654,-764]
const valuesome=transaction.some((n)=>{
    return n>0
})
console.log(valuesome)
//every:check the condition :to get true or false based on a condition
//it will return true if all element satisfies the condition
const resultevery=transaction.every((n)=>{
    return n>0
})
console.log(resultevery)