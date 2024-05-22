const fs=require('fs')// file synchorones data
console.log('hey')
let data=fs.readFileSync('file1.txt')
console.log('data in file->'+data)
let data2=fs.readFileSync('file2.txt')
console.log('data in file2->'+data2)
console.log('end')