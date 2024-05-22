console.log(this)//empty object in non strict method



function display(){
    console.log(this)
}
display()//global object



let obj={
    name:'dilsha',
    age:23,
    myfn:function(){
        console.log(this)//it will refer it is object
        console.log(this.name)//it give the name from the object
    }

}
obj.myfn()
let obj2={
    name:'dilsha',
    age:23,
    myfn2:function(){
        function myfn3(){
            console.log(this)
        }
        myfn3()
       
    }

}
obj2.myfn2()//it also return the global object
//in the this1 we discuse about non strict method