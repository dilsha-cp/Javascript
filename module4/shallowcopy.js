//spred operator{...} we can change value
let firstperson={
    name:'dilsha',
    age:23,
    addresss:{
        city:'surat',
        state:'gujarat'
    }
}
let secondperson={...firstperson}
secondperson.name='anshad'
secondperson.addresss.city='rajkot'
console.log(firstperson)
console.log(secondperson)