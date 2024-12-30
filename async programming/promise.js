// producing a promise

let mypromise = new Promise(function(resolve, reject){
  const a = 5;
  const b = 3;

  setTimeout(() => {
    if (a === b) {
      resolve('The values are equal');
    } else {
      reject(`The values aren't equal`);
    }
  }, 1000);
});


// pending state
// console.log(mypromise);

// fulfilled

mypromise.then(function(result){
    console.log(result);
    
})


// not fulfilled  or rejected 
mypromise.catch(function(failedresult){
    console.log(failedresult);
    
})