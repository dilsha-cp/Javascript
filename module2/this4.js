
'use strict'

console.log(this)//window object
function myfn(){
    console.log(this)
}
myfn()//undifined
let obj={
    name:'dilsha',
    age:23,
    myfn:function(){
        console.log(this)
    }
}
obj.myfn()//myfn2 object will get

let obj1={
    name:'dilsha',
    age:23,
    myfn1:function(){
        function myfn2(){
            console.log(this)
        }
        myfn2()
    }
}
obj1.myfn1()//undifined