var scores=[10,20,30,40]
for(var score of scores){
    console.log(score)//score represent the value
}
for(var score in scores){
    console.log(score)//score is index
}
//entries
var colour=['red','black','blue','red']
for(var [index,color] of colour.entries()){
    console.log(index+'->'+color)
}
var str='hello'
for(var ch of str){
    console.log(ch)
}