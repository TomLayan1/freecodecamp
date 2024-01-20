const alphabets = [
'A',
'B',
'C',
'D',
'E',
'F',
'G',
'H',
'I',
'J',
'K',
'L',
'M',
'N',
'O',
'P',
'Q',
'R',
'S',
'T',
'U',
'V',
'W',
'X',
'Y',
'Z'
];

function rot13(str) {
  // create an accumulator
  let cipherResult = '';

  // loop through the str
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const isALetter = alphabets.includes(char)
    if (!isALetter) {
      cipherResult += char;
    } else {
      const charIndex = alphabets.findIndex((c) => c === char)
      cipherResult += alphabets[charIndex + 13] || alphabets[charIndex - 13];
    }
  }
  return cipherResult;
}

console.log(rot13("SERR PBQR PNZC")); 
