
var a=2

function impure(x){
    console.log(x+a)
    a++

}
impure(1)
impure(2)
//pure function
function pure(x,y){
    return x+y
}
console.log(pure(2,5))

//in pure function doesnt use any extenal varaiable and resourses