// radix tells the base of the number string is in
function convertToInteger(str, radix) {
  const integer = parseInt(str, 2);
  return integer;
}

console.log(convertToInteger("10011"));