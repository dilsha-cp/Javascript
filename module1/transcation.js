//from transaction array filter the positive element and calculate the total using reduce and filter
let arr=[1000,2000,-3000,4000,-987,453]
let value=arr.filter((amount)=>{
    return amount>0
}).reduce((acc,value)=>{
    return acc+value

},0)
console.log(value)