var a=10
var a=9//problem with var keyword 1.redeclaration of variable
console.log(a)
var b=35
if(b==35){
    var c=19
    console.log(c)
}
console.log(c)//2.variable is not inside the the if block 
//To overcome these problem use let,const keyword to declare a variable
//let
let z=10
z=90
console.log(z)//reassinging is possible in let keyword
//but it is not possible in const keyword
//var redirect cant block in if block
//let reassign 
//const no redeclaration,reassigning,block