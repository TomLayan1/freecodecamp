function checkPositive(arr) {
  return arr.some(function(value) {
    return value > 0;
  })

}

console.log(checkPositive([1, 2, 3, -4, 5]));