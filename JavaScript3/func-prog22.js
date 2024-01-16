function checkPositive(arr) {

  return arr.every(function(value){
    return value > 0;
  })
}

console.log(checkPositive([1, 2, 3, -4, 5]));