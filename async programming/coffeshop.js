function placeOrder(drink) {
 return new Promise((resolve, reject) => {
   if (drink==='coffee') {
    resolve('Order for coffee received')
   } else {
    reject('Other order rejected')
   }
 })
    
}

function processOrder(order) {
    return new Promise((resolve) => {
      console.log('Order is being Processed');
      resolve(`${order} and is Served`)
      
    })   
}

// placeOrder('coffee').then((orderPlaced)=>{
//     console.log(orderPlaced);
//     let orderisProcessed = processOrder(orderPlaced)
//     return orderisProcessed
// }).then((processOrder)=>{
//     console.log(processOrder);
    
// })

// Async Await - keywords

async function serveOrder() {

    try {
        let orderPlaced = await placeOrder('coffe')
        console.log(orderPlaced);
        let processedorder = await processOrder(orderPlaced)
        console.log(processedorder);
    } catch (error) {
        console.log(error);
        
    }
}

serveOrder()