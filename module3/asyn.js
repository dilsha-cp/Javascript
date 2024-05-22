
//parallel execution
console.log('paralel execution........')
const fs=require('fs')
console.log('starting..........')
fs.readFile('file1.txt',cb1)
function cb1(err,data){
    if(err){
        console.log(err)
    }else{
        console.log('data in file1->'+data)
    }
}
fs.readFile('file2.txt',cb2)
function cb2(err,data){
    if(err){
        console.log(err)
    }else{
        console.log('data in file2->'+data)
    }
}
fs.readFile('file3.txt',cb3)
function cb3(err,data){
    if(err){
        console.log(err)
    }else{
        console.log('data in file3->'+data)
    }
}

console.log('ending..........')
//for serial execution

console.log('serial execution')
const fs1=require('fs')
console.log('starting..........')
fs1.readFile('file1.txt',cb4)
function cb4(err,data){
    if(err){
        console.log(err)
    }else{
        console.log('data in file1->'+data)
        fs1.readFile('file2.txt',cb5)
    }
}

function cb5(err,data){
    if(err){
        console.log(err)
    }else{
        console.log('data in file2->'+data)
        fs1.readFile('file3.txt',cb6)
    }
}

function cb6(err,data){
    if(err){
        console.log(err)
    }else{
        console.log('data in file3->'+data)
    }
}

console.log('ending..........')