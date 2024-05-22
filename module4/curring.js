function sum(x){
    function add(y){
        console.log(x+y);
    }
    return add
}
let addition=sum(2)
console.log(addition)
addition(4)