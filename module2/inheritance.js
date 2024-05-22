//method and properties from base class can be put down or can be derived into derived class
class person{
    constructor(_name,_age){
        this.name=_name
        this.age=_age
    }
    welcome(){
        console.log(`welocme ${this.name}`)
    }

}
class teacher extends person{
    constructor(_name,_age,_studentstrength){
        super(_name,_age)
        this.studentstrength=_studentstrength
    }
    test(){
        super.welcome()
    }
}
class student extends person{
    constructor(_name,_age,_course){
        super(_name,_age)
        this.course=_course
    }
}
person1=new person('dilsha',23)
teacher1=new teacher('anshad',24,75)
student1=new student('abey',24,'mca')
console.log(person1)
console.log(teacher1)
console.log(student1)
teacher1.test()