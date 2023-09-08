// a global variable that can be accessed outside scopes
let total = localStorage.getItem('total') || '';

// for selecting numbers
function getNumber(number){
  total += number;
  console.log(total);

  localStorage.setItem('total', total);
}

// for making symbols perform different functions
function pickSymbol(symbol){
  if (symbol === '='){
    total = eval(total);
    console.log(total);
  }
  else if (symbol === '<x'){
    total = total.slice(0, -1);
    console.log(total);
  }
}