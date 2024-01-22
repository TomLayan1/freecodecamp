function telephoneCheck(str) {
  if (str.indexOf('(') === -1 && str.indexOf(')') > -1) return false;

  // check if the first character is - 
  if (str[0] === '-') return false;
  // check is the first and last character are parenthesis
  if (str.indexOf(')') - str.indexOf('(') >= 5) return false;
  // check if the third character is not a number
  if (str[2] === ' ') return false; 

  // remove the spaces and - using regex
  let polishedNumber = str.replace(/-| /g, "");

  if (polishedNumber.indexOf('(') < polishedNumber.indexOf(')')) {
    polishedNumber = polishedNumber.replace(/\(|\)/g, "");
  }

  // check if the length of the string is 10 or 11 
  if (polishedNumber.length === 10) {
    return true;
  } else if (polishedNumber.length === 11 && polishedNumber[0] === '1') {
    return true;
  }
  return false;
}

console.log(telephoneCheck('55 55-55-555-5'));