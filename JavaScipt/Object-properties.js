function checkObj(obj, checkProp) {
  // check if the object has a property the searched property
  if (obj.hasOwnProperty(checkProp)) {
    // if it does, return the value of the property
  return obj[checkProp];
}
// if the property isn't found, return the string 'Not Found'
return "Not Found";
}
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));