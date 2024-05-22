function cardetails(_name,_color,_speed){
    this.name=_name
    this.color=_color

    this.speed=_speed
    this.drive=function(){
        console.log(`i am driving ${this.name} of ${this.color} color`)
    }

}
let car1=new cardetails("bmw","black",200)
let car2=new cardetails("benze","red",300)
console.log(car1)
console.log(car2)
car1.drive()
car2.drive()