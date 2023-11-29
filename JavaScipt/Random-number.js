function randomWholeNum() {
  let randomDecimalNumber = Math.random();
  let randomWholeNumber = Math.floor(randomDecimalNumber * 10);
  
  return randomWholeNumber;
}

console.log(randomWholeNum());