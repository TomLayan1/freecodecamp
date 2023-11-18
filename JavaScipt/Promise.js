// JavaScript promise
let car = new Promise(function(resolve, reject){
let fullTank = true;
if(fullTank)
  resolve();
else
  reject();
});

car.then(function(){
  document.write('Fuel tank is full. Happy driving!!');
}).catch(function(){
  document.write('Fuel tank not full');
});