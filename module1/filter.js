let number=[1,2,5,6,3,7,10,9]
let evenarr=[]
for(let i=0;i<number.length;i++){
    if(number[i]%2==0){
         evenarr.push(number[i])
    }
}
console.log(evenarr)
//filter will chek the condition and return a new array
//if the element satisfies the condition it will return the element otherwise it discard that element
let evenarr1=number.filter((n)=>{
    return n%2==0
})
console.log(evenarr1)
let transaction=[1000,2000,-3042]
let value=transaction.filter((amount)=>{
    return amount>0
})
console.log(value)