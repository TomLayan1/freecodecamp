function convertToRoman(num) {
  // create a object of roman numeral table
  const numeralTable = {
    M	: 1000,
    CM :	900,
    D :	500,
    CD :	400,
    C :	100,
    XC :	90,
    L :	50,
    XL :	40,
    X :	10,
    IX :	9,
    V :	5,
    IV : 4,
    I :	1
  };

  // create an accumulator
  let numeralAccumulator = '';

  // loop throught the object
  for (const numeral in numeralTable){
    // save the value of each numeral object to compare with num
    const numberValue = numeralTable[numeral];
    
    // check if num is greater than numberValue
    while (num >= numberValue) {
      // as long as num is greater than numberValue, it keep subtracting
      num -= numberValue;
      numeralAccumulator += numeral;
    }
    }
  // return the accumulator from the function
  return numeralAccumulator;
}

console.log(convertToRoman(36));