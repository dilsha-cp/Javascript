var arr=[13,'dilsha','true',23.45]
console.log('elements in the array: ' +arr)
//assessing method
var a=arr[0]
console.log('element at 0th position: '+a)
console.log('element at 3 position:'+arr[3])
//updating method
arr[0]='irshad'
console.log('element after update value: '+arr)

//deleting method   
delete arr[1]
console.log('element after delete:'+arr)
//length method
console.log('length of array:'+arr.length)
//push method
var arr2=[1,38,45,21]
console.log('elements in array:'+arr2)
arr2.push(100)//a element add at end of array
console.log('pushing a elemnt'+arr2)
//pop method
var c=arr2.pop()//a element remove at end of array
console.log('element after pop:'+arr2)
console.log('pop element is:'+c)
//shit method similer to pop method but remove element from starting of array
var d=arr2.shift()
console.log('shifted element:',d)
console.log('elements after shifting:',arr2)
//unshifting method like push but add element at starting
arr2.unshift(102)
console.log('after unshifting:',arr2)