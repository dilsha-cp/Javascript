function placeorder(drink){
    return new Promise(function(resolve, reject){
        if(drink === 'coffee'){
            resolve("order is received for coffee");
        } else {
            reject("sorry, we don't have that.");
        }
    });
}

function processorder(order){
    return new Promise(function(resolve){
        console.log('order is processed....');
        resolve(`${order} is served`);
    });
}

// placeorder('coffee').then(function(result){
//     console.log(result)
//     return processorder(result) // returning the promise from processorder
// }).then(function(processedOrder){
//     console.log(processedOrder)
// }).catch(function(err){
//     console.log(err)
// })//chaining method using promise
//using async await
async function serveorder(){
    let orderplaced= await placeorder('coffee')
    console.log(orderplaced)
    let orderprocessed= await processorder(orderplaced)
    console.log(orderprocessed)
}
serveorder()
