let fuelTank = function(){
  return new Promise (function(resolve, reject){
    resolve(`The car doesn't have enough fuel.`);
  })
}
let engine = function(){
  return new Promise (function(resolve, reject){
    resolve(`The engine is over heating.`);
  })
}
let travel = function(){
  return new Promise (function(resolve, reject){
    resolve(`The car is not fit for traveling.`);
  })
}

fuelTank().then(function(){
  return engine();
}).then(function(){
  return travel();
}).then(function(){
  document.write(`Done.`);
})