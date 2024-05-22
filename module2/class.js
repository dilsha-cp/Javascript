class person{
    constructor(_name,_age,_gender){
        this.name=_name
        this.age=_age
        this.gender=_gender

    }
    welcome(){
        console.log(`welcome ${this.name}`)
    }

}
let person1=new person('dilsha',23,'female')
let person2=new person('abey',24,'male')
let person3=new person('amila',23,'female')
console.log(person1)
console.log(person2)
console.log(person3)
person1.welcome()