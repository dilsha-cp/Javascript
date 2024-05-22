function person(_name,_age){
    this.name=_name
    this.age=_age
}
person.prototype.getNameAndAge=function(){
    console.log(`my name is ${this.name} and age is ${this.age}`)
}//prototype method used to linked togather the objects
let person1=new person('dilsha',24)
let person2=new person('irshad',25)
console.log(person1)
console.log(person2)
console.log(person1.getNameAndAge())
console.log(person2.getNameAndAge())
