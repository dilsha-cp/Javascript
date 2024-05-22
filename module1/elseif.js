//mark between 90 to 100-A
//betwwen 70 to 89 -B
//betwwen 60 to 69 -C
//between 50 to 59 -D
//lower than 50 -fail
var score=49
if(score>=90 && score<=100){
    console.log("scored A")
}
else if(score>=70 && score<=89){
    console.log("scored B")
}
else if(score>=60 && score<=69){
    console.log("scored C")
}
else if(score>=50 && score<=59){
    console.log("scored D")
}
else{
    console.log("Failed!!!")
}