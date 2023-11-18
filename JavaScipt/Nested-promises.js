let fuelTank = function(){
  return new Promise (function(resolve, reject){
    resolve(`The car doesn't have enough fuel.`);
  })
}
let engine = function(message){
  return new Promise (function(resolve, reject){
    resolve(message + `The engine is over heating.`);
  })
}
let travel = function(message){
  return new Promise (function(resolve, reject){
    resolve(message + `The car is not fit for traveling.`);
  })
}

fuelTank().then(function(result){
  return engine(result);
}).then(function(result){
  return travel(result);
}).then(function(result){
  document.write(`Done.` + result);
})