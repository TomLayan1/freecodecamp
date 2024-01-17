function uniteUnique(arr1, arr2, arr3) {
  // create an empty array to save the resul
  const newArray = [];
  // loop throught the arrays to make the program with 2 or more arrays and not only 3  
  for (let i = 0; i < arguments.length; i++) {
    let arrayArguments = arguments[i];

    for (let j = 0; j < arrayArguments.length; j++) {
      let valueIndex = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (newArray.indexOf(valueIndex) < 0) {
        newArray.push(valueIndex);
      }
    }
  }
  return newArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));