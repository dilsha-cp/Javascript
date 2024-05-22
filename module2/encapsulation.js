function person(_name,_age){
    this.name=_name
    this.age=_age
     this.getName=function(){
        return _age
     }

}
let person1=new person('dilsha',23)
console.log(person1)
console.log(person1.getName())
//when give getname outside the block cant update value