let person={
    firstname:'dilsha',
    lastname:'basheer',
    age:23,
    personaldetails:function(){
        console.log(`he iam ${this.firstname} ${this.lastname} am ${this.age} year old`)

    }
}
let person2={
    firstname:'irshad',
    lastname:'basheer',
    age:25,
    
}
//code to acess globaly
let details=function(city){
    console.log(`i am ${this.firstname} ${this.lastname} ${this.age} year old and from ${city}`)
}

//call
 person.personaldetails.call(person2)//here person2 will borrow the code from person to print details.
 details.call(person,'malappuram')
 //apply
 details.apply(person,['malappuram'])
 person.personaldetails.apply(person2)
//bind it help strore object in a function
let myfn=details.bind(person,'malappuram')
console.log(myfn)
myfn()
let myfn2=person.personaldetails.bind(person2)
console.log(myfn2)
myfn2()
// person.personaldetails()
// person2.personaldetails()