function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Object.freeze prevent a Object declared with the const keyword to be mutated
  Object.freeze(MATH_CONSTANTS)

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);