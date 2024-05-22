let arr=[1,2,3,4]
let squrarr=[]
for(let i=0;i<arr.length;i++){
    squrarr.push(arr[i]*arr[i])
}
console.log(squrarr)
//map
//Mapping methos always return a new result arrey
const Num=[1,2,3,4]
const squrNum=Num.map(function(n){
    return n*n
})
console.log(squrNum)
//a
//convert rupee 
const transaction=[1000,3000,4000,2000,-898,-3800,-4500]
const indoller=80
const rupee=transaction.map((n)=>{
    return (n/indoller).toFixed(0)

})
console.log(rupee)
    //foreach it is same as map but it doesnt return any arrey it just return vale,
    //and also it give value only if the print statement inside foreach otherwise it give undefined
    const transaction1=[1000,3000,4000,2000,-898,-3800,-4500]
const indoller1=80
const rupee1=transaction.forEach((n)=>{
    console.log((n/indoller1).toFixed(0))
})
//console.log(rupee1) it give undefined