let myobj={}
console.log(myobj)
let person={
    name:'dilsha',
    age:23
}
console.log(person)
console.log(person.hasOwnProperty('name'))//hasOwnProperty give if a property is there it return true else false
//prototype object is basically a object that linked to your object by default wheneever you create an object
//and inside that prototype object you find all the method prototype that you can use with your object.
//constuctor function
function person1(_name,_age){
    this.name=_name,
    this.age=_age
}
let person3=new person1('irshad',25)
console.log(person3)