let arr=[1,2,3,4]

let sum=0
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
    
}
console.log(sum)
//using reduces
let sum1=arr.reduce((acc,value)=>{
    return acc+value
},0)
console.log(sum1)
//acc is accumalator it is like intialisation (ed:sum=0 ) we can use any word instead of acc
let mul=arr.reduce((int,value)=>{
    return int*value
},1)
console.log(mul)