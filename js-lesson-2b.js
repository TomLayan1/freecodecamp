// a global variable that can be accessed outside scopes
let total = '';

// for selecting numbers
function getNumber(number){
  total += number;
  console.log(total);
}

// for making symbols perform different functions
function pickSymbol(symbol){
  if (symbol === '='){
    total = eval(total);
    console.log(total);
  }
}