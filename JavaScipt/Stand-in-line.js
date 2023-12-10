function nextInLine(arr, item) {
  // use .push() to add an item to the end of the array and save it in variable
  let addItem = arr.push(item);

  // use .shift() to remove the first element of the array and save it in a variable
  let removeItem = arr.shift();

  // return the removeItem varible from the function
  return removeItem;
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
// change number 6 to any figure to test code
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));