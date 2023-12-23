let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/ig;
let result = quoteSample.match(myRegex);
console.log(result);