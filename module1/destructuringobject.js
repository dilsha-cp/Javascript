let person={
    name:'dilsha',
    age:23,
    gender:'female',
    address:{
        city:'malappurm',
        state:'kerala'
    }
}
//console.log(person.name)
//console.log(person['age'])
let {name,age,gender,address:{city,state}}=person
console.log(name)
console.log(age)
console.log(gender)
console.log(city)
console.log(state)
let people={
    name:'anshad',
    age:24,
    address:{
        city:'wayanad'
    }
}
let {name :n,age:a,address:{city:c}}=people
console.log(n)
console.log(a)
console.log(c)