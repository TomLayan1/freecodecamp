function palindrome(str) {
  const fixedString = str.replace(/\W+|_/g, '').toLowerCase();
  const result = fixedString.split('').reverse().join('');
  console.log(fixedString, result);
  return (fixedString === result) ? true : false
}

console.log(palindrome("result"));