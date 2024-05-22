let arr=[
    {name:'a',age:21,gender:'m'},
    {name:'b',age:22,gender:'f'},
    {name:'c',age:23,gender:'m'},
    {name:'d',age:26,gender:'f'},
    {name:'e',age:25,gender:'m'}
    
]
//to get all the age of males
let males=arr.filter((obj)=>{
    return obj.gender=='m'
})
let maleage=males.map((male)=>{
    return male.age
})
console.log('data',males)
console.log('age of male: '+maleage)
//to get age of all man using chaining
let maleage1=arr.filter((obj)=>{
    return obj.gender=='m'
}).map((male1)=>{
    return male1.age
})
console.log(maleage1)