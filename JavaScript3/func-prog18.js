const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  let newArr = [];
  return newArr.concat(arr).sort(function(a, b){
    return a - b
  });

}

console.log(nonMutatingSort(globalArray));