let firstperson='dilsha'
let secondperson=firstperson
firstperson='anshad'
console.log('first person->',firstperson)
console.log('second person->',secondperson)//primitive
let firstperson1={//reference
    name:'dilsha',
    age:23
}
let secondperson2=firstperson1
firstperson1.name='anshad'
console.log(firstperson1)
console.log(secondperson2)