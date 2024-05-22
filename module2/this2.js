'use strict'
console.log(this)//empty object
function display(){
    console.log(this)

}
display()//undifined
let obj={
    name:'dilsha',
    age:23,
    myfn:()=>{
        console.log(this)
    }
}
obj.myfn()//{name: 'dilsha', age: 23, myfn: ƒ}
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
obj2.myfn2()//undefined