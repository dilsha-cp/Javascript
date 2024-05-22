function test(){
    let a=2
    function test2(){
        console.log(a)
    }
    return test2
}
let fun=test()
console.log(fun)
fun()
//function inside anthore function can asscess the value