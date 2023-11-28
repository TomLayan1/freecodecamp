function multiplyAll(arr) {
  let product = 1;
  // loop throught the array to get its value
  for (let i = 0; i < arr.length; i++){
    // loop through the values of since the are arrays to get their values
    for(let j = 0; j < arr[i].length; j++){
      // multiply the value by pointing to the values i.e [i] is the index of the arr parameter and [j] is the index of the value in arr
      product *= arr[i][j];
    }
  }
  return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));