function diffArray(arr1, arr2) {
  const newArr = [];
  function checkArray(first, second){
    // loop through an array to find elements that don't exist in the other array
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }
  checkArray(arr1, arr2);
  checkArray(arr2, arr1)

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));