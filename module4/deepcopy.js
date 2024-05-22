let firstperson={
    name:"John",
    age:20,
    gender:"male",
    address:{
        city:'tirur',
        state:'malappuram'
    }
}
let secondperson=JSON.parse(JSON.stringify(firstperson))//secondperson has totaly different reference from firstperson.
secondperson.name='dilsha'
secondperson.address.city='alingal'


console.log(firstperson)
console.log(secondperson)
//in shallow copy in onelevel in deepcopy it is in all level